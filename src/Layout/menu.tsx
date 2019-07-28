import * as React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from "antd";

const { useState } = React;
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1318803_03j3hqvhz1wp.js"
});

export interface MenuItem {
  logo: string;
  name: string;
}

interface MenuGroupProps {
  children?: React.ReactNode;
}

interface MenuState {
  hasTwoCnChar: boolean;
}

export const Menu = (props: MenuItem): JSX.Element => {
  const { logo, name } = props;
  const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
  const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
  const [hasTwoCnChar, setHasTwoCnChar] = useState<MenuState>({
    hasTwoCnChar: !!isTwoCNChar(name)
  });
  return (
    <div className="menu-item">
      <IconFont className="logo" type={logo} />
      <span
        className={classNames({
          "two-chinese-chars": hasTwoCnChar,
          title: true
        })}
      >
        {name}
      </span>
    </div>
  );
};

const MenuGroup: React.SFC<MenuGroupProps> = props => {
  const { children } = props;
  return (
    <div className="menu-group">
      {React.Children.map(children, menu => menu)}
    </div>
  );
};

MenuGroup.propTypes = { children: PropTypes.node.isRequired };

Menu.Group = MenuGroup;
