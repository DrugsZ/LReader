import * as React from "react";
import { Row, Col, Input, Button } from "antd";

const Register: React.FC<{}> = props => {
  return (
    <Row type="flex" align="middle" justify="center">
      <Col>
        <Input placeholder="请输入昵称" />
      </Col>
      <Col>
        <Button type="primary">开始</Button>
      </Col>
    </Row>
  );
};

export default Register;
