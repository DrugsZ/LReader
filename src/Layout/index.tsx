import React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

interface SliderProps {
  width?: number | string;
}
const Sliders = (props: SliderProps): JSX.Element => {
  const { width } = props;
  return (
    <Layout>
      <Sider
        theme="dark"
        width={width}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      />
    </Layout>
  );
};
export default Sliders;
