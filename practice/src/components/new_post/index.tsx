"use client"
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function NewPost() {
  const [post, setPost] = useState("");
  const [send,setSend] = useState<string[]>([]);
  // const [postButton, setPostButton] = useState(false);
  const {push} = useRouter();

  const pushAboutButton =()=>{
    const useConfirm = window.confirm("本当に遷移しますか？");
    if(useConfirm){
      push("/about")
    };
  };

  const onChangePostValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 文字を入力したい
    // 入力した文字をどこかに保存したい
    // const [post, setPost] = useState("");
    setPost(e.target.value);
    // console.log(e.target.value)
  };


  const onClickPostButton = () => {
    // if (!postButton) setPostButton(true);

    // 投稿ボタンを押したら右に入力された文字が表示される
    //  const [send,setSend] = useState("")
    //  setSend(post);

    // 現在の投稿内容を配列に追加
    if (post.trim()) {
      setSend([...send, post]);
      // 投稿後入力欄を空白にする
      setPost("");
    }
  };

  const onSubmitForm = (e: React.FormEvent)=>{
    e.preventDefault();
  };

  return (
    <div className="pt-10 flex justify-between">
      <div className="w-full">
        <Button onClick={pushAboutButton}>About</Button>
        <p>NewPost</p>
        <form onSubmit={onSubmitForm}>
          <p><input type="text" onChange={onChangePostValue} placeholder="入力して下さい" /></p>
          <input type="file" multiple accept="image/jpeg. image/png" />
          <p><Button type="button" onClick={onClickPostButton}>投稿</Button></p>
        </form>
      </div>
      <div className="w-full mt-5">
        {/* 投稿内容を順に表示 */}
        {send.map((p, index)=>(
          <p key={index}>{p}</p>
        ))}
      </div>
    </div>
  );
}