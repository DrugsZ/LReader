import * as React from "react";
import { Layout } from "antd";
import "./index.less";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MenuItem, Menu } from "./menu";

const { Sider } = Layout;
const { Group: MenuGroup } = Menu;

interface SliderProps {
  width?: number | string;
  menus: MenuItem[];
}

const Sliders: React.FC<SliderProps & RouteComponentProps> = props => {
  const { width, menus, history } = props;
  console.log(props);
  return (
    <Sider
      width={width}
      style={{
        backgroundColor: "#a0d911",
      }}
    >
      <MenuGroup
        onClick={(pathName: string) => {
          history.push(pathName);
          console.log(pathName);
        }}
      >
        {menus.map((menu: MenuItem, i: number) => {
          const { logo, name, path } = menu;
          return <Menu key={name} logo={logo} name={name} path={path} />;
        })}
      </MenuGroup>
    </Sider>
  );
};
export default withRouter(Sliders);
export { MenuItem };
