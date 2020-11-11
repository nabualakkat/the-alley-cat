import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow" 
import Layout from '../components/Layout'
import placesStyles from './places.module.scss'
import Head from '../components/Head'


class WorldMap extends React.Component {

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart)
    chart.geodata = am4geodata_worldLow

    //VISITED SERIES
    let seriesVisited = new am4maps.MapPolygonSeries()
    seriesVisited.useGeodata=true
    seriesVisited.include = this.props.countryCodes
    chart.series.push(seriesVisited)
    //Configure seriesVisited 
    let visitedTemplate = seriesVisited.mapPolygons.template
    visitedTemplate.fill = am4core.color('#434034')
    //Create seriesVisited hover adn hit state and set alternative fill color
    let hsVisited = visitedTemplate.states.create("hover")
    hsVisited.properties.fill = am4core.color("#6C6977")
    visitedTemplate.events.on("hit", (ev) => {
      let chart = ev.target.series.chart
      chart.zoomToMapObject(ev.target)
    })


    //NOT VISITED SERIES
    let seriesNotVisited = new am4maps.MapPolygonSeries()
    seriesNotVisited.useGeodata=true
    seriesNotVisited.exclude= [...this.props.countryCodes, "AQ"]
    chart.series.push(seriesNotVisited)
    //Configure seriesNotVisited
    seriesNotVisited.mapPolygons.template.fill = am4core.color('#736e5a')


    //MARKER SERIES
    let imageSeries = chart.series.push(new am4maps.MapImageSeries())
    let imageSeriesTemplate = imageSeries.mapImages.template
    let circle = imageSeriesTemplate.createChild(am4core.Circle)
    circle.radius = 4
    circle.fill = am4core.color("#6C6977")
    circle.stroke = am4core.color("#FFFFFF")
    circle.strokeWidth = 2
    circle.nonScaling = true
    imageSeries.tooltip.label.interactionsEnabled=true
    imageSeries.tooltip.keepTargetHover=true
    circle.tooltipHTML = `<b>{title}</b><br><a href=http://localhost:8000/blog/{slug}>View Post</a>`
    imageSeriesTemplate.propertyFields.latitude="latitude"
    imageSeriesTemplate.propertyFields.longitude="longitude"
    imageSeries.data=this.props.location
    this.chart=chart
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }
  render() {
    return(
      <div id="chartdiv" style={{ width: "100%", height: "81vh", marginTop: "5rem"}}></div>
    )
  }
}



const PlacesPage = () => {
  const visitedCountries = []
  const visitedLocations = []
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            countryCode
            slug
            location{
              lat
              lon
            }
          }
        }
      }
      allContentfulFeaturedPost {
        edges {
          node {
            title
            countryCode
            slug
            location{
              lat
              lon
            }
          }
        }
      }
    }
  `)

  
  data.allContentfulBlogPost.edges.forEach((edge)=>{
    if(!visitedCountries.includes(edge.node.countryCode)){
      visitedCountries.push(edge.node.countryCode)
    }
    visitedLocations.push({
      latitude: edge.node.location.lat,
      longitude: edge.node.location.lon,
      title: edge.node.title,
      slug: edge.node.slug
    })
  })
  data.allContentfulFeaturedPost.edges.forEach((edge)=>{
    if(!visitedCountries.includes(edge.node.countryCode)){
      visitedCountries.push(edge.node.countryCode,)
    }
    visitedLocations.push({
      latitude: edge.node.location.lat,
      longitude: edge.node.location.lon,
      title: edge.node.title,
      slug: edge.node.slug
    })
  })

  return(
    
    <div className={placesStyles.container}>
    <Layout theme={"dark"}>
      <Head title="Places"/>
      <WorldMap countryCodes={visitedCountries} location={visitedLocations}/>
    </Layout>
    </div>
  )
}

export default PlacesPage