import React, {useState} from 'react'
import { TotalGraph } from '../TotalGraph'
import { Spinner } from '../Spinner'
import { getJsonData } from '../api/getCSV.js'
import { TotalBox } from '../TotalBox'
import Select from 'react-select'
import { Municipality } from '../Municipality'
import { MunicipToday } from '../MunicipToday'
import './style.css'

export const Content = () => {
    const [loading,setLoading] = useState(true);
    const [dates,setDates] = useState([]);

    const [daily, setDaily] = useState([]);
    const [cumulative, setCumulative] = useState([]);

    const [today, setToday] = useState(0);
    const [total, setTotal] = useState(0);

    const [municips, setMunicips] = useState([]);
    const [municip, setMunicip] = useState("Oslo");

    const [municipDaily, setMunicipDaily] = useState([]);
    const [municipCumulative, setMunicipCumulative] = useState([]);

    const [municipData, setMunicipData] = useState([]);

    const [municipTotalName, setMunicipTotalName] = useState([]);
    const [municipTotalCount, setMunicipTotalCount] = useState([]);

    const [municipsToday, setMunicipsToday] = useState([]);

    React.useEffect(() => {
        getJsonData().then(result => {
            
            let startDate = new Date(result["startDate"])
            let days = datesBetween(startDate, new Date())
            let formattedDays = formatDates(days)
            setDates(formattedDays)

            let entries = result["entries"]

            let municipsToday = lastOf(entries)["municips"]

            /* municipsToday = municipsToday.sort((a,b) => {
                return a["count"] < b["count"]
            }) */

            setMunicipsToday(lastOf(entries)["municips"])

            let daily = new Array(formattedDays.length).fill(0)

            let municipData = []

            entries.map((x,index) => {
                let day = []

                x["municips"].map(m => {
                    day.push(m["count"])
                })

                let daySum = day.reduce((a, b) => a + b, 0)

                daily[index] = daySum
            })

            let cumulated = cumulate(daily)

            setDaily(daily)
            setCumulative(cumulated)

            setToday(lastOf(daily))
            setTotal(lastOf(cumulated))

            entries.map((x,index) => {
                
                x["municips"].map(m => {
                    let currMun = m["municip"]

                    let municipFound = municipData.find(x => x["municip"] === currMun)


                    if (!municipFound) {
                        let newMun = {}

                        newMun["municip"] = currMun
                        newMun["daily"] = new Array(formattedDays.length).fill(0)

                        municipData.push(newMun)
                    }

                    municipData.find(x => x["municip"] === currMun)["daily"][index] = m["count"]
                })
            })


            let sortedMunicipData = municipData.sort((a,b) => {
                return a["municip"] > b["municip"]
            })


            setMunicipData(sortedMunicipData)

            let allMunicips = sortedMunicipData.map(x => x["municip"])
            let selectMunicipList = allMunicips.map((e) => ({value: e,label: e}))

            setMunicips(selectMunicipList)

            let municipArray = sortedMunicipData.find(x => x["municip"] === municip)["daily"]

            let municipArraySlice = municipArray.slice()
            
            setMunicipDaily(municipArraySlice)
            setMunicipCumulative(cumulate(municipArraySlice))

            let totalForMunicips = sortedMunicipData.map(x => {
                let entry = {}
                entry["total"] = x["daily"].reduce((a, b) => a + b, 0)
                entry["municip"] = x["municip"]
                return entry
            })

            totalForMunicips = totalForMunicips.sort((a,b) => {
                return a["total"] > b["total"]
            })

            setMunicipTotalName(totalForMunicips.map(x => x["municip"]))
            setMunicipTotalCount(totalForMunicips.map(x => x["total"]))

            

            setLoading(false)
        })
    }, [])

    /*---------------------------- Helper Methods ------------------------------*/

    function datesBetween(start,end) {
        let dates = []
        let curr = start
        
        while (curr < end) {
            dates.push(curr)
            curr = new Date(curr.getFullYear(),curr.getMonth(),curr.getDate()+1);
        }
        return dates
     }

    function formatDates(dateArray) {
        return dateArray.map(d => {
            let n = new Date(d)
            let day = (n.getDate()).toString().padStart(2, "0")
            let month = (n.getMonth()+1).toString().padStart(2, "0")
            //let year = n.getFullYear().toString().substr(2,2)
            return `${day}.${month}`
        })
    }

    function cumulate(array) {
        const cumulativeSum = (sum => value => sum += parseInt(value))(0);
        return array.map(cumulativeSum)
    }

    function lastOf(array) {
        return array[array.length-1]
    }

    /*---------------------------- Handler Methods ------------------------------*/

    function handleChange(e) {
        setMunicip(e)
        let municipArray = municipData.find(x => x["municip"] === e)["daily"]
        setMunicipDaily(municipArray)
        setMunicipCumulative(cumulate(municipArray))
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <div className="content">
            <TotalBox total={total} today={today} />
            <br/>
            <TotalGraph x={dates} total={cumulative} daily={daily} color1={"rgba(202,15,27,1)"} color2={"rgba(231,128,0,1)"} />
            <br/>

            {lastOf(daily) > 0 ? (
                <>
                    <br/>
                    <h3>NYE TILFELLER I DAG</h3>
                    <br/>
                    <MunicipToday stats={municipsToday} />
                    <br/>
                </>
            ): null}

            <br/>
            <h3>KOMMUNEUTVIKLING</h3>
            <br/>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={municips.find(m => m["label"] === municip)}
                value={municips.find(m => m["label"] === municip)}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={municips}
                onChange={e => handleChange(e.value)}
                theme={(theme) => ({
                ...theme,
                colors: {
                ...theme.colors,
                    text: 'black',
                    primary: 'rgb(70,70,70)',
                    primary25: 'rgb(255,217,62)',
                    primary50: 'rgb(255,217,62)',
                    primary75: 'pink',
                    dangerLight: 'pink'
                },
                })}
            />
            <br/>
            <TotalBox today={lastOf(municipDaily)} total={lastOf(municipCumulative)} />
            <br/> 
            <TotalGraph x={dates} total={municipCumulative} daily={municipDaily} color1={"rgba(21,177,48,1)"} color2={"rgba(231,128,0,1)"} />
            <br/>
            <br/>
            <h3>FORDELING MELLOM KOMMUNER</h3>
            <br/>
            <Municipality x={municipTotalName} y={municipTotalCount} />
            <br/>
            <br/>
            <p className="madeByText">Kilde: FHI.no, NRK.no, VG.no og lokalaviser fra kommuner</p>
            <p className="madeByText">Laget av Adem Salih</p>
            <br/>
        </div>
    )
}
