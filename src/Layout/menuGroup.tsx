import * as React from "react";
import * as PropTypes from "prop-types";

interface MenuGroupProps {
  defaultSelectedKey?: number;
  onClick?: (path: string, e?: React.MouseEvent) => void;
}

interface MenuGroupState {
  selectKey: number | string;
}

export interface CloneMenuProps {
  select: boolean;
  onClick?: (path: string, e?: React.MouseEvent) => void;
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
    const { onClick: patentClickHandle } = this.props;
    return React.Children.map(children, (menu, i) => {
      return React.cloneElement(menu as React.ComponentElement<CloneMenuProps, any>, {
        select: selectKey === i,
        onClick: (path: string, e: React.MouseEvent) => {
          this.handleSelect.bind(this, i);
          patentClickHandle(path, e);
        },
      });
    });
  }

  render() {
    const { children } = this.props;
    return <div className="menu-group">{this.renderMenuItem(children)}</div>;
  }
}

export default MenuGroup;
