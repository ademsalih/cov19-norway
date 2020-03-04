import React, {useState} from 'react'
import { TotalGraph } from '../TotalGraph'
import { readString } from 'react-papaparse'
import { Spinner } from '../Spinner'
import { get } from '../api/getCSV.js'
import { TotalBox } from '../TotalBox'
import './style.css'

export const Content = () => {
    const [string, setString] = useState("")

    React.useEffect(() => {
          get().then(result => setString(result))
     }, [])
    
    var results = readString(string)
    let data = results['data']

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

    let dates = getDates()
    let totalInfections = getTotalInfections()
    let cumulativeInfections = getTotalCumulativeInfections()

    if (!string) {
        return <Spinner />
    }

    let count = cumulativeInfections[cumulativeInfections.length-1]
    let today = totalInfections[cumulativeInfections.length-1]

    return (
        <div className="content">
            <TotalBox total={count} today={today} />
            <br/>
            <TotalGraph x={dates} total={cumulativeInfections} daily={totalInfections} />
            <p style={{
                color: '#B2B2B2',
                marginTop: '4.5em',
                textAlign: 'center',
                fontSize: '0.8em'
                }}>Kommuneoversikt kommer snart</p>
        </div>
    )
}
