import { TwitterCircleFilled } from "@ant-design/icons";
import Head from "next/head";
import Layout from "../components/Layout";

const Profile = () => {
  const { nickname, id } = { nickname: "류정주", id: "totw2018" };
  return (
    <>
      <Head>
        <title>{`${nickname} (@${id})`}</title>
      </Head>
      <Layout>
        <TwitterCircleFilled />
      </Layout>
    </>
  );
};

export default Profile;
