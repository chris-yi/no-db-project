import React, { Component } from "react";
import "./Reset.css";
import "./App.css";
import Weather from "./components/weather/Weather";
import Quote from "./components/quote/Quote";
import Background from "./components/background/Background";
import Todo from "./components/todo/Todo";

class App extends Component {
  render() {
    var today = new Date();
    var hours = today.getHours() % 12 || 12;
    var minutes = today.getMinutes();

    return (
      <div>
        <div>
          <Background />
        </div>
        <div className="Time">
          {hours + ":" + minutes}
          <br />
          <a href="http://www.reddit.com" target="_blank" id="social">
            <i class="fa fa-reddit" aria-hidden="true" />
          </a>
          <a href="http://www.youtube.com" target="_blank" id="social">
            <i class="fa fa-youtube" aria-hidden="true" />
          </a>
          <a href="http://www.facebook.com" target="_blank" id="social">
            <i class="fa fa-facebook-official" aria-hidden="true" />
          </a>
          <a href="http://www.github.com" target="_blank" id="social">
            <i class="fa fa-github" aria-hidden="true" />
          </a>
          <a href="http://www.gmail.com" target="_blank" id="social">
            <i class="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
        <div>
          <form
            action="http://www.google.com/search"
            method="get"
            name="Searchform"
            target="_blank"
          >
            <input
              autocomplete="on"
              className="form-controls search"
              name="q"
              placeholder=""
              type="text"
            />
            <button class="button" type="submit">
              <i class="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </div>
        <div>
          <Weather />
        </div>
        <div>
          <Quote />
        </div>
        <div>
          {/* <Todo /> */}
        </div>
      </div>
    );
  }
}

export default App;
