import * as React from "react";
import { Menu, Layout } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import "./index.less";
import { RouteComponentProps, withRouter } from "react-router-dom";
import classNames from "classnames";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1318803_03j3hqvhz1wp.js",
});

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
interface MenuItem {
  logo: string;
  name: string;
  path: string;
}
interface SliderProps {
  width?: number | string;
  menus: MenuItem[];
}
const { Sider } = Layout;
const Sliders: React.FC<SliderProps & RouteComponentProps> = props => {
  const { width, menus } = props;
  const { history } = props;
  const toPath = React.useCallback(
    ({ key }) => {
      history.push(key);
    },
    [history],
  );
  return (
    <Sider width={width || 256} className="menu-sider">
      <Menu>
        {menus.map(item => (
          <Menu.Item key={item.path} className="menu-item" onClick={toPath}>
            <div>
              <IconFont className="logo" type={item.logo} />
              <span
                className={classNames({
                  "two-chinese-chars": !!isTwoCNChar(item.name),
                  title: true,
                })}
              >
                {item.name}
              </span>
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default withRouter(Sliders);
