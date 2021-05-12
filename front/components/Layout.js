import Link from "next/link";
import styled from "styled-components";
import { Menu, Input, Row, Col } from "antd";

const Layout = ({ child }) => {
  return (
    <>
      <Row justify="center" gutter={8}>
        <Col xs={24} md={4}>
          zz
        </Col>
        <Col xs={24} md={8}>
          {child}
        </Col>
        <Col xs={24} md={4}>
          searchform
        </Col>
      </Row>
    </>
  );
};

export default Layout;
