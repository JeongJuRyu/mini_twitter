import React from "react";
import Head from "next/head";
import withReduxSaga from "next-redux-saga";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const MiniTwitter = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>MiniTwitter</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(MiniTwitter);
