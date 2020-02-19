import * as React from "react";
import classNames from "classnames";
import { Icon } from "antd";
import MenuGroup from "./menuGroup";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1318803_03j3hqvhz1wp.js",
});

export interface MenuItem {
  logo: string;
  name: string;
  path: string;
  select?: boolean;
  onClick?: (path: string, e?: React.MouseEvent) => void;
}

export const MenuItem = () => {};

const Menu: React.FC<MenuItem> = props => {
  const { logo, name, select, onClick, path } = props;
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  return (
    <div
      className="menu-item"
      role="presentation"
      onClick={e => {
        onClick(path, e);
      }}
    >
      <IconFont className="logo" type={logo} />
      <span
        className={classNames({
          "two-chinese-chars": !!isTwoCNChar(name),
          title: true,
          isActive: select,
        })}
      >
        {name}
      </span>
    </div>
  );
};

Menu.Group = MenuGroup;

export default Menu;
