import { render } from "react-dom";
import * as React from "react";
import axios from "axios";
import App from "./App";

setInterval(() => {
  console.log("test ajax");
  axios
    .get("/books/list", {
      params: {
        ID: 12345,
      },
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}, 5000);

render(<App />, document.getElementById("app"));
