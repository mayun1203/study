'use client'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Sidebar } from '../common/sidebar'
import TextareaAutosize from 'react-textarea-autosize'
import Image from 'next/image'
import { FavoriteButton } from '@/components/new_post/favorite'

export function NewPost() {
    const [post, setPost] = useState('')
    const [image, setImage] = useState('')
    const [send, setSend] = useState<{ post: string; image: string | null }[]>(
        []
    )

    const onChangePostValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.target.value)
    }

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        const fileObject = e.target.files[0]
        setImage(window.URL.createObjectURL(fileObject))
        console.log(image)
    }

    const onClickPostButton = () => {
        const newPost = { post: post, image: image }
        if (post.trim()) {
            setSend([...send, newPost])
        }
        setPost('')
        setImage('')
    }

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className="h-screen flex bg-green-800 bg-opacity-25 ">
            <Sidebar />
            <div className="w-2/3 flex flex-col overflow-y-auto border-2 border-white">
                <form
                    onSubmit={onSubmitForm}
                    className="my-2 object-top w-full flex items-center justify-center"
                >
                    <TextareaAutosize
                        onChange={onChangePostValue}
                        value={post}
                        placeholder="New Post"
                        minRows={5}
                        className="ml-1 w-2/3 text-center bg-green-800 bg-opacity-0 border border-white text-white rounded"
                    />
                    <div className="flex flex-col">
                        <Button
                            component="label"
                            variant="outlined"
                            className="border border-white w-60 h-20 ml-2 text-gray-400"
                        >
                            IMAGE UPLOAD
                            <input
                                type="file"
                                onChange={handleImage}
                                accept="image/jpeg. image/png"
                                hidden
                                id="fileUploader"
                            />
                        </Button>
                        <Button
                            type="button"
                            onClick={onClickPostButton}
                            variant="outlined"
                            className="mt-1 border-white w-60 h-9 ml-2 text-gray-400"
                        >
                            POST
                        </Button>
                    </div>
                </form>
                <div className="text-center">
                    {/* 投稿内容を順に表示 */}
                    {send.map((p, index) => (
                        <div
                            key={index}
                            className="w-full text-center text-white border border-white"
                        >
                            <div className="mt-4">{p.post}</div>
                            <div>
                                {p.image && (
                                    <Image
                                        src={p.image}
                                        alt="画像が表示されません"
                                        width={700}
                                        height={300}
                                        className="m-4 object-cover mx-auto"
                                    />
                                )}
                            </div>
                            <FavoriteButton />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/3 h-screen bg-gray-400"></div>
        </div>
    )
}
