import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Home = () => {
  const { logIn } = useSelector((state) => state.user);
  useEffect(() => {
    if (!logIn) Router.push("/logIn");
  });
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default Home;
