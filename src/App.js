import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        {
          quote: "",
          author: "",
        },
      ],
    };
  }

  componentDidMount = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((quote) => quote.json())
      .then((quote) =>
        this.setState({
          quote: quote,
        })
      );
  };
  handleClick = () => {
    this.setState({});
  };
  render() {
    let ranInt = Math.floor(Math.random() * 100);
    return (
      <div id="quote-box">
        <div id="text">
          {this.state.quote[ranInt] ? this.state.quote[ranInt].quote : ""}
        </div>
        <div id="author">
          <h2>
            By:
            {this.state.quote[ranInt] ? this.state.quote[ranInt].author : ""}
          </h2>
        </div>
        <button id="new-quote" onClick={this.handleClick}>
          New quote
        </button>
        <div>
          <a
            id="tweet-quote"
            href="https://www.twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet this quote
          </a>
        </div>
      </div>
    );
  }
}

export default App;
