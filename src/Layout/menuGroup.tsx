import * as React from "react";
import * as PropTypes from "prop-types";

interface MenuGroupProps {
  defaultSelectedKey?: number;
}

interface MenuGroupState {
  selectKey: number | string;
}

export interface CloneMenuProps {
  select: boolean;
  onClick?: (selectKey: number | string, e?: React.ChangeEvent) => void;
}

/**
 * 从props中解析默认选中菜单
 * @param props 当前props
 */
function resloveProps(props: MenuGroupProps) {
  const { defaultSelectedKey = "" } = props;
  return defaultSelectedKey;
}

class MenuGroup extends React.Component<MenuGroupProps, MenuGroupState> {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  readonly state: MenuGroupState = {
    selectKey: resloveProps(this.props),
  };

  /**
   * 子菜单点击处理函数
   * @param selectKey 触发点击事件的菜单索引
   */
  handleSelect(selectKey: number | string) {
    this.setState({
      selectKey,
    });
  }

  renderMenuItem(children: React.ReactNode) {
    const { selectKey } = this.state;
    return React.Children.map(children, (menu, i) => {
      return React.cloneElement(menu as React.ComponentElement<CloneMenuProps, any>, {
        select: selectKey === i,
        onClick: this.handleSelect.bind(this, i),
      });
    });
  }

  render() {
    const { children } = this.props;
    return <div className="menu-group">{this.renderMenuItem(children)}</div>;
  }
}

export default MenuGroup;
