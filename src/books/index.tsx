import * as React from "react";
import * as PropTypes from "prop-types";
import Book, { BookProps } from "./book";
import "./index.less";

const test: BookProps = {
  name: "测试书名",
  author: "测试作者",
};

const Books: React.FunctionComponent = props => {
  const { children } = props;
  return (
    <div className="books">
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
      <Book name={test.name} author={test.author} />
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
