'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import { Sidebar } from '../common/sidebar'
import TextareaAutosize from 'react-textarea-autosize';


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
        <div className="h-screen flex bg-green-800 bg-opacity-25">
            < Sidebar />
            <div className='w-2/3 flex flex-col overflow-y-auto'>
                <form onSubmit={onSubmitForm} className="object-top w-full space-y-4 border-2 flex">
                    <p>
                        <TextareaAutosize
                            type="text"
                            onChange={onChangePostValue}
                            value={post}
                            placeholder="入力して下さい"
                            className=" bg-green-800 bg-opacity-0 border-2 border-white text-white"
                        />
                    </p>
                    <input
                        type="file"
                        multiple
                        accept="image/jpeg. image/png"
                        className=''
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
                <div className="text-center">
                    {/* 投稿内容を順に表示 */}
                    {send.map((p, index) => (
                        <p
                            key={index}
                            className="w-full border border-white"
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </div>
            <div className='w-1/3 h-screen bg-gray-400'></div>
        </div>
    )
}
