import React from "react"
import { Line } from "react-chartjs-2"
import "./style.css"

export const TotalGraph = ({x,total,daily}) => {
	const data = {
		labels: x,
		datasets: [
			{
				label: "Totalt",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(202,15,27,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(202,15,27,1)",
				pointBackgroundColor: "#CA0F1B",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(202,15,27,1)",
				pointHoverBorderColor: "rgba(202,15,27,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 3,
				pointHitRadius: 10,
				data: total
			},
			{
				label: "Nye",
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(231,128,0,1)",
				borderColor: "rgba(231,128,0,1)",
				borderCapStyle: "butt",
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: "miter",
				pointBorderColor: "rgba(231,128,0,1)",
				pointBackgroundColor: "#E77F00",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(231,128,0,1)",
				pointHoverBorderColor: "rgba(231,128,0,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 3,
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
					aspectRatio: 1.9
				}}
			/>
		</div>
	)
}
