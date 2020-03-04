import React, {useState} from 'react'
import { TotalGraph } from '../TotalGraph'
import { readString } from 'react-papaparse'
import { Spinner } from '../Spinner'
import { get } from '../api/getCSV.js'
import { TotalBox } from '../TotalBox'
import Select from 'react-select'
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

    function getMunicipalities() {
        if (string) {
            let municips = []

            let temp = data[0].splice(1)

            temp.map(e => municips.push({value: e,label: e}))

            return municips
        }
    }

    let dates = getDates()
    let totalInfections = getTotalInfections()
    let cumulativeInfections = getTotalCumulativeInfections()
    let municipalities = getMunicipalities()

    let count = cumulativeInfections[cumulativeInfections.length-1]
    let today = totalInfections[cumulativeInfections.length-1]

    const testVals = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    if (!string) {
        return <Spinner />
    }

    return (
        <div className="content">
            <TotalBox total={count} today={today} />
            <br/>
            <TotalGraph x={dates} total={cumulativeInfections} daily={totalInfections} />
            <br/>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={municipalities[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={municipalities}
            />
        </div>
    )
}
