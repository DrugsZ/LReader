import * as React from "react";
import { Tooltip } from "antd";

export interface BookProps {
  name: string;
  author: string;
}

const Book: React.FunctionComponent<BookProps> = props => {
  const { name, author } = props;
  return (
    <div className="book-box">
      <Tooltip placement="right" title={name}>
        <div className="content" />
      </Tooltip>
      <div className="name">这是书名</div>
      <div className="author">{author}</div>
    </div>
  );
};

export default Book;
