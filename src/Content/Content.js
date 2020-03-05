import React, {useState} from 'react'
import { TotalGraph } from '../TotalGraph'
import { readString } from 'react-papaparse'
import { Spinner } from '../Spinner'
import { get } from '../api/getCSV.js'
import { TotalBox } from '../TotalBox'
import Select from 'react-select'
import { Municipality } from '../Municipality'
import './style.css'

import { getJsonData } from '../api/getCSV.js'

export const Content = () => {
    
    const [loading,setLoading] = useState(true);
    const [dates,setDates] = useState([]);

    const [daily, setDaily] = useState([]);
    const [cumulative, setCumulative] = useState([]);

    const [today, setToday] = useState(0);
    const [total, setTotal] = useState(0);

    const [municips, setMunicips] = useState([]);
    const [municip, setMunicip] = useState(0)

    React.useEffect(() => {
        getJsonData().then(result => {
            
            let startDate = new Date(result["startDate"])
            let days = datesBetween(startDate, new Date())
            let formattedDays = formatDates(days)
            setDates(formattedDays)

            let entries = result["entries"]

            let daily = []

            let municipData = []

            let values = entries.map(x => {
                let day = []

                x["municips"].map(municip => {
                    day.push(municip["count"])


                })

            
                let daySum = day.reduce((a, b) => a + b, 0)

                daily.push(daySum)
            })

            let cumulated = cumulate(daily)

            setDaily(daily)

            

            setCumulative(cumulated)

            setToday(lastOf(daily))
            setTotal(lastOf(cumulated))




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
        setMunicips(e)
    }




    if (loading) {
        return <Spinner />
    }

    


    /////////////////////////////// OLD CODE ////////////////////////////////////
    /*
    const [string, setString] = useState("")
    const [municip, setMunicip] = useState(0)

    React.useEffect(() => {
          get().then(result => setString(result))
     }, [])
    
    var results = readString(string)
    let data = results['data']

    function csvToJSON() {
        let dict = {}

        dict["startDate"] = "2020-02-25"

        dict["entries"] = []

        let tempData = data.slice()
        tempData = tempData.splice(1)

        let ms = data[0]

        tempData.map((row) => {
            
            var newEntry = {}
            var cities = []

            row.map((x,index) => {

                if (index === 0) {
                    newEntry = {}
                    newEntry["date"] = row[0]
                } else {
                    
                    if (x > 0) {
                        var by = ms[index]

                        var antall = parseInt(x)

                        cities.push({"municip": by,"count":antall})
                        
                    }
                }

            })

            newEntry["municips"] = cities

            dict["entries"].push(newEntry)
        })

        var stringAgain = JSON.stringify(dict,null,4);
        console.log(stringAgain)
    }



    

    

    let jsonData2 = csvToJSON()
    
    function getDates() {
        let dates = []
        data.map(x => dates.push(x[0]))
        return dates.splice(1)
    }

    function getTotalInfections() {
        var infections = []
        var i;
        for (i = 1; i < data.length; i++) {
            let curr = data[i]
            curr = curr.slice(1)
            let currSum = curr.reduce((a,b) => parseInt(a) + parseInt(b), 0)
            infections.push(currSum)
        }
        return infections
    }

    function getTotalCumulativeInfections() {
        let total = getTotalInfections()
        const cumulativeSum = (sum => value => sum += value)(0);
        return total.map(cumulativeSum)
    }

    function cumulative(array) {
        const cumulativeSum = (sum => value => sum += parseInt(value))(0);
        return array.map(cumulativeSum)
    }

    function getMunicipalities() {
        if (string) {
            let municips = []
            let temp = data[0].slice(0)
            temp = temp.splice(1)
            temp.map((e,index) => municips.push({value: index,label: e}))
            return municips
        }
    }

    function getMunicipStats() {
        if (string) {
            let tmp = data.slice()
            tmp = tmp.splice(1)

            let totalStat = tmp[0].map((col, i) => tmp.map(row => row[i]));
            totalStat.shift()
            return totalStat
        }
    }

    function getTotalForMunicips() {
        if (string) {
            let last = municipStats.map(x => lastOf(cumulative(x)))
            return last
        }
    }

    function municipVals(muns,stats) {
        if (string) {
            let municipSorted = []

            let munis = muns
            let muniStats = stats

            munis.map((x,index) => municipSorted.push([x,muniStats[index]]))

            let sortedList = municipSorted.sort((a,b) => {
                return a[0]['label'] > b[0]['label']
            })
            
            console.log(municipSorted)
            return municipSorted
        }
    }

    function lastOf(array) {
        return array[array.length-1]
    }

    let dates = getDates()
    let totalInfections = getTotalInfections()
    let cumulativeInfections = getTotalCumulativeInfections()


    //let municipalities = msvals.map(e => e[0])
    //let municipStats = msvals.map(e => e[1])

    let municipalities = getMunicipalities()
    let municipStats = getMunicipStats()

    /* let msvals = municipVals(municipalities2,municipStats2)

    let municipalities = msvals.map(e => e[0])
    let municipStats = msvals.map(e => e[1]) 


    let currenctForMunicips = getTotalForMunicips()

    function handleChange(e) {
        setMunicip(e)
    } */

    

    

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
                defaultValue={municips[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name="color"
                options={municips}
                onChange={e => handleChange(e.value)}
            />

            {/*
            <br/>
            <TotalBox today={lastOf(municipStats[municip])} total={lastOf(cumulative(municipStats[municip]))} />
            <br/>

            <TotalGraph x={dates} total={cumulative(municipStats[municip])} daily={municipStats[municip]} />
            <br/>
            <br/>
            <h3>FORDELING AV SMITTEDE</h3>
            <br/>
            <Municipality x={municipalities.map(e => e.label)} y={getTotalForMunicips()} />
            <br/>
            <br/> */}
        </div>
    )
}
