import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuoteBox = (props) => {
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
          <Button size="small" id="new-quote" onClick={props.handleClick}>
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
