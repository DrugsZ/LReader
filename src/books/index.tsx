import * as React from "react";
import * as PropTypes from "prop-types";
import axios from "axios";
import Book from "./book";
import "./index.less";

const Books: React.FunctionComponent = props => {
  const { children } = props;
  return (
    <div className="books">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
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
