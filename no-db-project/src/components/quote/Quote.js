import React, { Component } from 'react';
import axios from "axios";
import "./Quote.css"



class Quote extends Component {
  constructor(){
    super()
    
    this.state = {
      quote_text: "",
      quote_author: "",
    }
  }


  componentWillMount = () => {
    axios.get('http://localhost:8080/api/quotes')
    .then(response => {
      console.log(response.data)
      this.setState({
        quote_text: response.data.quoteText,
        quote_author: response.data.quoteAuthor
      })
    })
  }

  tweet = () => {
    var newQuote = this.state.quote_text + "- " + this.state.quote_author;
    window.open("https://twitter.com/intent/tweet?text=" + newQuote);
  }

  render() {
    return (
      <div className="Quote">
          <p className="Message">
              {this.state.quote_text} - {this.state.quote_author}{" "}
              <i id="tweet" className="fa fa-twitter" aria-hidden="true" onClick={this.tweet}></i>
          </p>
      </div>
    );
  }
}

export default Quote;
