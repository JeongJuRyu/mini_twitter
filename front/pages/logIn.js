import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Input, Menu, Row, Col, Button } from "antd";
import styled from "styled-components";

const RightWrapper = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  display: inline-block;
  vertical-align: middle;
`;
const ButtonWrapper = styled.div`
  width: 60%;
  height: 10%;
`;

const Login = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <img
            src="https://cdn.pixabay.com/photo/2017/05/08/13/15/bird-2295431_1280.jpg"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        <Col span={12}>
          <RightWrapper>
            <h2>bye</h2>
            <div>멋진 게임</div>
            <ButtonWrapper>
              <Button
                style={{ borderRadius: "15px" }}
                type="primary"
                shape="circle"
                block="true"
              >
                가입하기
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                style={{ borderRadius: "15px" }}
                shape="circle"
                block="true"
              >
                로그인하기
              </Button>
            </ButtonWrapper>
          </RightWrapper>
        </Col>
      </Row>
      <div></div>
    </>
  );
};

export default Login;
