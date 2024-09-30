"use client"
import { Button } from "@mui/material";
import { useState } from "react";

export function NewPost() {
  const [post, setPost] = useState("");
  const [postButton, setPostButton] = useState(false);

  const onChangePostValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost(e.target.value);
  };


  

  const onClickPostButton = () => {
    if (!postButton) setPostButton(true);
    if (postButton) setPostButton(false);
  };

  return (
    <div className="pt-10">
      <p>New aaaPost</p>
      <form>
        <input type="text" onChange={onChangePostValue} placeholder="入力して下さい" />
        {/* <input type="file" multiple accept="image/jpeg. image/png" onChange={}>
          image
        </input> */}
        <Button type="button" onClick={onClickPostButton}>
          投稿
        </Button>
      </form>
    </div>
  );
}
