import React, { Component } from 'react';
import axios from "axios";
import "./Weather.css"



class Weather extends Component {
  constructor(){
    super()
    
    this.state = {
      weather: "",
      longitude: "",
      latitude: ""
    }
  }


  componentDidMount = () => {
         var that = this
         if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            that.setState({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            })
          })
        }
  }


  componentWillUpdate(nextProps,nextState){
    console.log(nextState.longitude)
    console.log(nextState.latitude)
    if(this.state.latitude === "" && this.state.longitude === ""){
      axios.get(`http://localhost:8080/api/weather/${nextState.latitude}/${nextState.longitude}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          weather: response.data
        })
      })
    }
  }

  // celcius = () => {
  //   console.log("I've been clicked!")
  // }

  render() {

    return (

      <div className="Drop-down">
        <div className="Weather">

          {this.state.weather ? (<h1 id="Temp">{`${Math.round(this.state.weather.currently.temperature)}\xB0`}</h1>) : (<i class="fa fa-cog fa-spin fa-2x fa-fw"></i>
)}

          {this.state.weather ? (<h1 id="Type">{this.state.weather.currently.icon}</h1>) : (<p></p>
)}


        </div>
      </div>
    );
  }
}

export default Weather;
