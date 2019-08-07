import { render } from "react-dom";
import * as React from "react";
import { Layout } from "antd";
import { hot } from "react-hot-loader/root";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Sliders, { MenuItem } from "./Layout";
import Books from "./books";
import Popular from "./popular";
import "./index.less";

const menus: MenuItem[] = [
  {
    logo: "icon-shujia1",
    name: "书架",
  },
  {
    logo: "icon-fenlei-remen",
    name: "热门",
  },
  {
    logo: "icon-shezhi",
    name: "设置",
  },
];

@hot
class App extends React.Component {
  public state = {};

  public render(): JSX.Element {
    return (
      <Router>
        <Layout
          style={{
            height: "100%",
          }}
        >
          <Sliders width={160} menus={menus} />
          <Layout>
            <Route exact path="/books" component={Books} />
            <Route path="/popular" component={Popular} />
          </Layout>
        </Layout>
      </Router>
    );
  }
}

render(<App />, document.getElementById("app"));
