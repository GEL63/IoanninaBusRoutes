import React, { Component } from 'react';
import Plot from 'react-plotly.js';

export function show(){
	var chart = new ApiChart();
}
class ApiChart extends Component {

	// Set up states for loading data
	constructor(props){
		super(props);
		this.state ={ data: [] }
	}

	// Call API upon component mount
	componentDidMount() {
		const endpoint = "https://data.cityofnewyork.us/resource/rc75-m7u3.json";

		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				this.setState( {data: data} )
			})
	}

	// Change data structure
	transformData (data) {
		let plot_data = [];

		let x = [];
		let y = [];
		data.map(each => {
			x.push(each.date_of_interest)
			y.push(each.case_count)
		})
		plot_data['x'] = x;
		plot_data['y'] = y;

		console.log(plot_data)

		return plot_data
	}

	render() {
		return (
			<div>
				<Plot
					data = {[
							{type: 'scatter',
							 mode: 'lines',
							 x:[1,2,3,4,5] ,
							 y: [1,2,3,4,5],
							 marker: { color: '#ed022d'}}
						]}
					layout = { {width: '500px', height: '500px',left:"150px", title: 'Covid Case Count'} }
					style = {{borderRadius:'1px',border :'2px solid blue',width: '700px',left:"150px"}}
				 />
			</div>
		)
	}
}
//this.transformData(this.state.data)['x']
//this.transformData(this.state.data)['y']
export default ApiChart;

