import { Form, Input } from "antd";
import { useCallback, useState } from "react";

const PostInput = () => {
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch({
      type: SUBMIT_POST_REQUEST,
      data: {
        text,
      },
    });
  }, []);
  return (
    <Form style={{}} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        style={{ resize: "none", marginTop: "30px" }}
        placeholder="무슨 일이 일어나고 있나요?"
        value={text}
        onChange={onChangeText}
      />
    </Form>
  );
};

export default PostInput;
