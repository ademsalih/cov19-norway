import React, {useState} from 'react'
import { TotalGraph } from '../TotalGraph'
import { Spinner } from '../Spinner'
import { getJsonData } from '../api/getCSV.js'
import { TotalBox } from '../TotalBox'
import Select from 'react-select'
import { Municipality } from '../Municipality'
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

    React.useEffect(() => {
        getJsonData().then(result => {
            
            let startDate = new Date(result["startDate"])
            let days = datesBetween(startDate, new Date())
            let formattedDays = formatDates(days)
            setDates(formattedDays)

            let entries = result["entries"]

            let daily = []

            let municipData = []

            entries.map(x => {
                let day = []

                x["municips"].map(municip => {
                    day.push(municip["count"])
                })

            
                let daySum = day.reduce((a, b) => a + b, 0)

                daily.push(daySum)
            })

            let cumulated = cumulate(daily)

            setDaily(daily)
            setCumulative(cumulate(daily))

            setToday(lastOf(daily))
            setTotal(lastOf(cumulated))

            entries.map((x,index) => {
                x["municips"].map(municip => {
                    let currMun = municip["municip"]
                    let municipFound = municipData.find(x => x["municip"] === currMun)

                    if (!municipFound) {
                        let newMun = {}

                        newMun["municip"] = currMun
                        newMun["daily"] = new Array(daily.length).fill(0);

                        municipData.push(newMun)
                    }
                    municipData.find(x => x["municip"] === currMun)["daily"][index] = municip["count"]
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
            setMunicipDaily(municipArray)
            setMunicipCumulative(cumulate(municipArray))

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
            let year = n.getFullYear().toString().substr(2,2)
            return `${day}.${month}.${year}`
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
        console.log(e)
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
            <TotalGraph x={dates} total={cumulative} daily={daily} />
            <br/>
            <br/>
            <h3>KOMMUNEOVERSIKT</h3>
            <br/>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={municips.filter(m => m["value"] === "Oslo")}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={municips}
                onChange={e => handleChange(e.value)}
            />
            <br/>
            <TotalBox today={lastOf(municipDaily)} total={lastOf(municipCumulative)} />
            <br/> 
            <TotalGraph x={dates} total={municipCumulative} daily={municipDaily} />
            <br/>
            <br/>
            <h3>FORDELING AV SMITTEDE</h3>
            <br/>
            <Municipality x={municipTotalName} y={municipTotalCount} />
            <br/>
            <br/>
        </div>
    )
}
