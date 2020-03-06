import React from 'react'
import './style.css'

export const MunicipToday = ({stats}) => {

    return(
        <div className="municipTodayBox">

            <table>
                <tr>
                    <th align="left">Kommune</th>
                    <th align="center">Antall</th> 
                </tr>
                {stats.map(e => [
                    <tr>
                        <td align="left">{e["municip"]}</td>
                        <td align="center">{e["count"]}</td>
                    </tr>
                ])}
            </table>
        </div>
    )
}