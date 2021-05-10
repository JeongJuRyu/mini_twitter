import React from "react";
import Head from "next/head";
import withReduxSaga from "next-redux-saga";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => (
  <>
    <Head>
      <title>NodeBird</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(NodeBird);
