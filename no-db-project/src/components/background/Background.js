import React, { Component } from 'react';
import axios from "axios";
import "./Background.css"



class Background extends Component {
  constructor(){
    super()
    
    this.state = {
      image: "hello"
    }
  }


  componentWillMount = () => {
    axios.get('http://localhost:8080/api/background')
    .then(response => {
      console.log(response.data)
      this.setState({
        image: response.data
      })
    })
  }


  render() {
      console.log(this.state.image)
    return (
      <div className="Background">
          <img src={this.state.image} className="Image"/>
      </div>
    );
  }
}

export default Background;