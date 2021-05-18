import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import PostInput from "../components/PostInput";
import PostSquare from "../components/PostSquare";

const Home = () => {
  const { logIn } = useSelector((state) => state.user);
  const { Posts } = useSelector((state) => state.post);
  /*useEffect(() => {
    if (!logIn) Router.push("/logIn");
  });*/
  return (
    <>
      <Layout>
        <PostInput></PostInput>
        {Posts.map((post) => (
          <PostSquare key={post.id} post={post} />
        ))}
      </Layout>
    </>
  );
};

export default Home;
