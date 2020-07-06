import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialQuote: "Harambe is the king",
      author: "Pichaya Puttekulangkura",
      quote: [
        {
          objQuote: "Be yourself; everyone else is already taken.",
          objAuthor: "Henry Ford",
        },

        {
          objQuote: "You've gotta dance like there's nobody watching",
          objAuthor: "THOR",
        },

        {
          objQuote: "Be the change that you wish to see in the world",
          objAuthor: "LINUS Techs",
        },

        {
          objQuote: "No one can make you feel inferior without your consent.",
          objAuthor: "Pokemane",
        },

        {
          objQuote: "Live as if you were to die tomorrow.",
          objAuthor: "Make a wish kid",
        },

        {
          objQuote: "Harambe is the king",
          objAuthor: "Pichaya Puttekulangkura",
        },
      ],
    };
  }

  handleClick = () => {
    let randomIndex = Math.floor(Math.random() * 5);
    this.setState({
      initialQuote: this.state.quote[randomIndex].objQuote,
      author: this.state.quote[randomIndex].objAuthor,
    });
  };
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <h1>{this.state.initialQuote}</h1>
        </div>
        <div id="author">
          <h2>By: {this.state.author} </h2>
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
