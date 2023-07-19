import React, { useEffect } from 'react'
import CanvasJSReact from '../graph_lib/canvasjs.react';
import axios from "axios"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function TestGraph() {

  useEffect(() => {
    
    doApi();
  },[])

  const doApi = async() => {
    let url = "https://coronavirus-19-api.herokuapp.com/countries";
    const resp = await axios.get(url);
    console.log(resp.data)
  }

  const ar = [
    { label:"Jerusalem" , y:900},
    { label:"Tel aviv" , y:800},
    { label:"Ramat gan" , y:700},
    {label:"Netanya" , y:750}
  ]
  
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    title:{
      text: "Graph of pop in cities"
    },
    axisY: {
      includeZero: false,
      title:"Pop * 1000"
    },
    axisX: {
      title:"Cities"
    },
    data: [{
      type: "column", //change type to bar, line, area, pie, etc
      // indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: ar
    }]
  }

  return (
    <div className='container'>
      <h2>Graph of something</h2>

      <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
    </div>
  )
}
