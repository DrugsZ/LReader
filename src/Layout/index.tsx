import * as React from "react";
import { Layout } from "antd";
import "./index.less";
import { MenuItem, Menu } from "./menu";

const { Sider } = Layout;
const { Group: MenuGroup } = Menu;

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
        <MenuGroup>
          {menus.map((menu: MenuItem) => {
            const { logo, name } = menu;
            return <Menu key={name} logo={logo} name={name} />;
          })}
        </MenuGroup>
      </Sider>
    </Layout>
  );
};
export default Sliders;
export { MenuItem };
