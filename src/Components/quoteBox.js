import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// import { makeStyles } from "@material-ui/core/styles";
import "./QuoteBox.css";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//   },
// });

const QuoteBox = (props) => {
  // const classes = useStyles();
  return (
    <Card>
      <CardContent id="quote-box">
        <span id="text">
          {props.state.quote[props.ranInt] ? (
            <Typography>
              {props.state.quote[props.ranInt].quote} -{" "}
              <span id="author">{props.state.quote[props.ranInt].author}</span>
            </Typography>
          ) : (
            ""
          )}
        </span>
        <CardActions>
          <Button
            id="new-quote"
            size="small"
            className="button"
            onClick={props.handleClick}
          >
            New quote
          </Button>
          <IconButton
            id="tweet-quote"
            href={`https://www.twitter.com/intent/tweet?text=${
              props.state.quote[props.ranInt].quote
            }&hashtags=mickyngub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default QuoteBox;
