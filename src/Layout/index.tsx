import React from "react";
import { Layout, Icon } from "antd";
import "./index.less";

const { Sider } = Layout;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1318803_03j3hqvhz1wp.js"
});

export interface MenuItem {
  logo: string;
  name: string;
}
interface SliderProps {
  width?: number | string;
  menus: MenuItem[];
}
const Sliders = (props: SliderProps): JSX.Element => {
  const { width, menus } = props;
  return (
    <Layout>
      <Sider
        width={width}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <div className="menu-group">
          {menus.map(
            (menu: MenuItem): JSX.Element => {
              const { logo, name } = menu;
              return (
                <div className="menu-item">
                  <IconFont type={logo} />
                  <span>{name}</span>
                </div>
              );
            }
          )}
        </div>
      </Sider>
    </Layout>
  );
};
export default Sliders;
