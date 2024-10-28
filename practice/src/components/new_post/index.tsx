'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar } from '../common/sidebar'
import TextareaAutosize from 'react-textarea-autosize';


export function NewPost() {
    const [post, setPost] = useState('');
    const [image, setImage] =useState('');
    const [send, setSend] = useState<{post:string, image:string | null}[]>([]);

    const onChangePostValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
    }

    const handleImage = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const fileObject = e.target.files[0]
        setImage(window.URL.createObjectURL(fileObject))
        console.log(image)
    }

    const onClickPostButton = () => {
        const newPost = {post: post, image: image}
        if (post.trim()) {
            setSend([...send, newPost]);
        }
        setPost('');
    }

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="h-screen flex bg-green-800 bg-opacity-25">
            < Sidebar />
            <div className='w-2/3 flex flex-col overflow-y-auto border-2 border-white'>
                <form onSubmit={onSubmitForm} className="object-top w-full flex">
                    <p>
                        <TextareaAutosize
                            onChange={onChangePostValue}
                            value={post}
                            placeholder="New Post"
                            minRows={4}
                            className=" w-96 text-center bg-green-800 bg-opacity-0 border border-white text-white"
                        />
                    </p>
                    <input
                        type="file"
                        onChange={handleImage}
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
                <div className="text-center">
                    {/* 投稿内容を順に表示 */}
                    {send.map((p, index) => (
                        <p
                            key={index}
                            className="w-full text-white border border-white"
                        >
                            <div className='mt-4'>{p.post}</div>
                            {p.image && (
                                <img src={p.image} className='w-3/4 h-1/2 m-4 object-cover'/>
                            )}
                        </p>
                    ))}
                </div>
            </div>
            <div className='w-1/3 h-screen bg-gray-400'></div>
        </div>
    )
}
