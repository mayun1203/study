'use client'
import { Button } from '@mui/material'
// import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from '@mui/material/Link'
// import Card from '@mui/material/Card';

export function NewPost() {
    const [post, setPost] = useState('')
    const [send, setSend] = useState<string[]>([])
    // const [postButton, setPostButton] = useState(false);
    // const { push } = useRouter()

    // const pushAboutButton = () => {
    //     const useConfirm = window.confirm('本当に遷移しますか？')
    //     if (useConfirm) {
    //         push('/about')
    //     }
    // }

    const onChangePostValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 文字を入力したい
        // 入力した文字をどこかに保存したい
        // const [post, setPost] = useState("");
        setPost(e.target.value)
        // console.log(e.target.value)
    }

    const onClickPostButton = () => {
        // if (!postButton) setPostButton(true);

        // 投稿ボタンを押したら右に入力された文字が表示される
        //  const [send,setSend] = useState("")
        //  setSend(post);

        // 現在の投稿内容を配列に追加
        if (post.trim()) {
            setSend([...send, post])
            // 投稿後入力欄を空白にする
            setPost('')
        }
    }

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="pt-10 h-screen flex justify-between bg-green-800 bg-opacity-25">
            <div className="w-full">
                <h1 className="font-serif text-4xl">SUN</h1>
                <Link href="about" className="text-black">
                    About
                </Link>
                {/* <Button onClick={pushAboutButton}>About</Button> */}
                <p className="font-serif text-2xl">NewPost</p>
                <form onSubmit={onSubmitForm} className="space-y-4">
                    <p>
                        <input
                            type="text"
                            onChange={onChangePostValue}
                            value={post}
                            placeholder="入力して下さい"
                            className="border-2 border-black"
                        />
                    </p>
                    <input
                        type="file"
                        multiple
                        accept="image/jpeg. image/png"
                    />
                    <p>
                        <Button
                            type="button"
                            onClick={onClickPostButton}
                            variant="outlined"
                        >
                            投稿
                        </Button>
                    </p>
                </form>
            </div>
            <div className="w-full mt-5">
                {/* 投稿内容を順に表示 */}
                {send.map((p, index) => (
                    <p
                        key={index}
                        className="bg-white border-2 border-black shadow-2xl"
                    >
                        {p}
                    </p>
                ))}
            </div>
        </div>
    )
}
