import React from 'react'
import './style.css'

export const TotalBox = ({total,today}) => {
    return(
        <div className="summaryBox">
            <div className="totalBoxContainer">
                <div className="totalBox">
                    <h4>TOTALT</h4>
                    <h1>{total}</h1>
                </div>
            </div>
            <div className="todayBoxContainer">
                <div className="todayBox">
                    <h4>I DAG</h4>
                    <h1>{today}</h1>
                </div>
            </div>
        </div>
    )
}