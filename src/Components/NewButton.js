import React from "react";
import Button from "@material-ui/core/Button";
import "./NewButton.css";

export default function PlainCssButton() {
  return (
    <div>
      <Button>Default</Button>
      <Button className="button">Customized</Button>
    </div>
  );
}
