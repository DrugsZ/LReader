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
  select?: boolean;
  onClick?: (e?: React.ChangeEvent) => void;
}

interface MenuState {
  hasTwoCnChar: boolean;
}

export const Menu = (props: MenuItem): JSX.Element => {
  const { logo, name, select, onClick } = props;
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  return (
    <div className="menu-item" role="presentation" onClick={onClick}>
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
