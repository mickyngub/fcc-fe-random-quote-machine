import React, { Component } from "react";
import "./App.css";
import "fontsource-roboto";
import QuoteBox from "./Components/QuoteBox";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
  },
};
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
      <Grid className={this.props.classes.container} container justify="center">
        <Grid xs={12} lg={8} item>
          {this.state.quote[ranInt] ? (
            <QuoteBox
              handleClick={this.handleClick}
              state={this.state}
              ranInt={ranInt}
            ></QuoteBox>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
