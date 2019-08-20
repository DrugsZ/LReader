import { hot } from "react-hot-loader/root";
import { render } from "react-dom";
import * as React from "react";
import axios from "axios";
import App from "./App";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

const HotApp = hot(App);

render(<HotApp />, document.getElementById("app"));
