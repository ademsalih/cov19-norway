import React from 'react'
import { HorizontalBar } from "react-chartjs-2"
import './style.css'

export const Municipality = ({x,y}) => {

    function sorted() {
        let municipTotals = []

        x.map((x,index) => municipTotals.push( [x,y[index] ] ))

        let sortedList = municipTotals.sort((a,b) => {
            return a[1] < b[1]
        })
        
        return sortedList
    }

    let sort = sorted()

    let sortedMunicip = sort.map(e => e[0])
    let sortedCount = sort.map(e => e[1])

    const data = {
        labels: sortedMunicip,
        datasets: [
            {
                label: 'Smittede',
                backgroundColor: 'rgba(202,15,27,1)',
                borderColor: 'rgba(202,15,27,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(202,15,27,1)',
                hoverBorderColor: 'rgba(202,15,27,1)',
                data: sortedCount
            }
        ]
    };

    return(
        <div>
            <HorizontalBar data={data} height={null} width={null}
				options={{
					aspectRatio: 1.2
				}}
            />
        </div>
    )
}