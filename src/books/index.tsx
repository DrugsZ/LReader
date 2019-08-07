import * as React from "react";
import * as PropTypes from "prop-types";
import "./index.less";

const Books: React.FunctionComponent = props => {
  const { children } = props;
  return (
    <div className="books">
      <span>yhhgngjhgj</span>
      <span>yhhgngjhgj</span>
      <span>yhhgngjhgj</span>
      {React.Children.map(children, child => child)}
    </div>
  );
};

Books.propTypes = {
  children: PropTypes.element,
};

Books.defaultProps = {
  children: [],
};
export default Books;
