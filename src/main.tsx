import { hot } from "react-hot-loader/root";
import { render } from "react-dom";
import * as React from "react";
import App from "./App";

const HotApp = hot(App);

render(<HotApp />, document.getElementById("app"));
