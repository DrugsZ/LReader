import * as React from "react";
import { Layout } from "antd";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Sliders, { MenuItem } from "./Layout";
import Books from "./books";
import Popular from "./popular";
import Register from "./register";
import "./index.less";

const menus: MenuItem[] = [
  {
    logo: "icon-shujia1",
    name: "书架",
    path: "/books",
  },
  {
    logo: "icon-fenlei-remen",
    name: "热门",
    path: "popular",
  },
  {
    logo: "icon-shezhi",
    name: "设置",
    path: "test",
  },
];

export default class App extends React.Component {
  public state = {};

  componentDidMount() {
    axios.get("/api/isinit").then(res => {
      console.log(res);
      const { content } = res;
      const { exist } = res;
    });
  }

  public render(): JSX.Element {
    return (
      <Router>
        <Layout
          style={{
            height: "100%",
          }}
        >
          <Sliders width={60} menus={menus} />
          <Layout>
            <Route exact path="/books" component={Books} />
            <Route path="/popular" component={Popular} />
            <Route path="/register" component={Register} />
          </Layout>
        </Layout>
      </Router>
    );
  }
}
