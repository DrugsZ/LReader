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
    <Sider
      width={width}
      style={{
        backgroundColor: "#a0d911",
      }}
    >
      <MenuGroup>
        {menus.map((menu: MenuItem, i: number) => {
          const { logo, name } = menu;
          return <Menu key={name} logo={logo} name={name} />;
        })}
      </MenuGroup>
    </Sider>
  );
};
export default Sliders;
export { MenuItem };
