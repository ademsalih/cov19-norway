import React from "react"
import { Line } from "react-chartjs-2"
import "./style.css"

export const TotalGraph = ({x,total,daily,color1,color2}) => {
	const data = {
		labels: x,
		datasets: [
			{
				label: "Totalt",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: color1,
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: color1,
				pointBackgroundColor: color1,
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: color1,
				pointHoverBorderColor: color1,
				pointHoverBorderWidth: 2,
				pointRadius: 2,
				pointHitRadius: 10,
				data: total
			},
			{
				label: "Nye",
				fill: false,
				lineTension: 0.1,
				backgroundColor: color2,
				borderColor: color2,
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: color2,
				pointBackgroundColor: color2,
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: color2,
				pointHoverBorderColor: color2,
				pointHoverBorderWidth: 2,
				pointRadius: 2,
				pointHitRadius: 10,
				data: daily
			}
		]
	}

	return (
		<div className="graphBackground">
			<Line
				data={data}
				height={null}
				width={null}
				options={{
					aspectRatio: 1.6
				}}
			/>
		</div>
	)
}
