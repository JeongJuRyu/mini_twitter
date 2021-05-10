import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { logIn } = useSelector((state) => state.user);
  useEffect(() => {
    if (!logIn) Router.push("/logIn");
  });
  return <div>home</div>;
};

export default Home;
