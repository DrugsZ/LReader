import * as React from "react";
import { Layout, Spin } from "antd";
import { Route, HashRouter as Router, RouteComponentProps } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Sliders, { MenuItem } from "./Layout";
import Books from "./books";
import Popular from "./popular";
import Register from "./register";
import { setLocal } from "./util";
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
    name: "书源管理",
    path: "booksource",
  },
];

export default class App extends React.Component {
  state = {};

  componentDidMount() {
    axios.get("/api/isinit").then((res: AxiosResponse<{ isInit: boolean; message: string; success: true }>) => {
      const { data } = res;
      const { isInit } = data;
      if (isInit) {
        setLocal("isInit", true);
        // eslint-disable-next-line no-restricted-globals
        location.href = "/#/books";
      } else {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/#/register";
      }
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
