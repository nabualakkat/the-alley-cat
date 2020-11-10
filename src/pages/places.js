import React from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow" 
import Layout from '../components/Layout'
import placesStyles from './places.module.scss'
import placeholderData from '../dummy-data/blog-data'

const visitedLocations = []
placeholderData.forEach((post)=>{
  if(!visitedLocations.includes(post.location)){
    visitedLocations.push(post.location)
  }
})

class WorldMap extends React.Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart)
    chart.geodata = am4geodata_worldLow
    let seriesVisited = new am4maps.MapPolygonSeries()
    seriesVisited.useGeodata=true
    seriesVisited.include = visitedLocations
    chart.series.push(seriesVisited)
    let seriesNotVisited = new am4maps.MapPolygonSeries()
    seriesNotVisited.useGeodata=true
    seriesNotVisited.exclude= [...visitedLocations, "AQ"]
    chart.series.push(seriesNotVisited)
    //Configure seriesVisited 
    seriesVisited.mapPolygons.template.fill = am4core.color('#2D343C')
    //Create seriesVisited hover state and set alternative fill color
    let hsVisited = seriesVisited.mapPolygons.template.states.create("hover")
    hsVisited.properties.fill = am4core.color("#892cdc")
    // //Configure seriesNotVisited
    seriesNotVisited.mapPolygons.template.fill = am4core.color('#8B95A1')

    this.chart=chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return(
      <div id="chartdiv" style={{ width: "100%", height: "85vh", marginTop: "5rem"}}></div>
    )
  }
}



const PlacesPage = () => {
  return(
    <div className={placesStyles.container}>
    <Layout>
      <WorldMap/>
    </Layout>
    </div>
  )
}

export default PlacesPage