import { render } from "react-dom";
import * as React from "react";
import Sliders, { MenuItem } from "./Layout";
import "./index.less";

const menus: MenuItem[] = [
  {
    logo: "icon-shujia1",
    name: "书架"
  },
  {
    logo: "icon-fenlei-remen",
    name: "热门"
  },
  {
    logo: "icon-shezhi",
    name: "设置"
  }
];

class App extends React.Component {
  public state = {};

  public render(): JSX.Element {
    return <Sliders width={160} menus={menus} />;
  }
}

render(<App />, document.getElementById("app"));
