import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useCallback, useState } from "react";

const { Meta } = Card;

const PostSquare = () => {
  const [like, setLike] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);
  const onToggleLike = useCallback(() => {
    setLike((state) => !state);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentVisible((state) => !state);
  }, []);
  return (
    <>
      <Card
        style={{ marginTop: "30px" }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <RetweetOutlined key="retweet" />,
          like ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
        ]}
      ></Card>
    </>
  );
};

export default PostSquare;
