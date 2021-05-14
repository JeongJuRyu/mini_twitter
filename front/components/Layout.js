import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";
import PropTypes from "prop-types";
import Weather from "./weather";
import { HomeWrapper } from "../util/style";

const Layout = ({ children }) => {
  return (
    <>
      <Row justify="center" gutter={8}>
        <Col xs={24} md={4}>
          <Menu>
            <Menu.Item>
              <TwitterCircleFilled />
            </Menu.Item>
            <Menu.Item>
              <Link href="/">홈</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/profile">프로필</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/">탐색</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/">팔로워</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/">팔로잉</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={24} md={8}>
          <div
            style={{
              width: "32vw",
              position: "fixed",
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>홈</div>
            <div style={{}}>너</div>
          </div>
          {children}
        </Col>
        <Col xs={24} md={4}>
          <Weather />
        </Col>
      </Row>
    </>
  );
};

Layout.propTypes = {
  child: PropTypes.node.isRequired,
};

export default Layout;
