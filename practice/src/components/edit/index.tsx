'use client'

import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Form } from '@/components/common/input'

type AddressList = { prefCode: number; prefName: string }

export function EditPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [keep, setKeep] = useState<
        {
            name: string
            email: string
            phoneNumber: string
            selectAddress: string
            profileImage: string | null
        }[]
    >([
        {
            name: '',
            email: '',
            phoneNumber: '',
            selectAddress: '',
            profileImage: null,
        },
    ])
    const [addresses, setAddresses] = useState<AddressList[]>([])
    const [selectAddress, setSelectAddress] = useState('')

    const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const editEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const editPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value)
    }

    const editProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        const fileObject = e.target.files[0]
        setProfileImage(window.URL.createObjectURL(fileObject))
    }

    const onClickEditButton = (e: React.FormEvent) => {
        e.preventDefault()
        const myProfile = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            selectAddress: selectAddress,
            profileImage: profileImage,
        }
        console.log(typeof myProfile, 'aaa')
        setKeep([...keep, myProfile])
        setName('')
        setEmail('')
        setPhoneNumber('')
    }
    // console.log(keep, "bbb")

    const onClickDeleteButton = (index: number) => {
        const userConfirmed = window.confirm('本当に削除しますか？')
        if (userConfirmed) {
            const newMyProfile = keep.filter((_, i) => {
                return i !== index
            })
            setKeep(newMyProfile)
        }
    }

    const onClickAllDelete = () => {
        const userConfirmed = window.confirm('全てのリストを削除しますか？')
        if (userConfirmed) {
            setKeep([])
        }
    }

    useEffect(() => {
        fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'U6fiPXv6CEOyv6bxGBIFnqvBdofnq6roBjMUpShC',
            },
        })
            .then((response) => response.json())
            .then((data) => setAddresses(data.result))
            .catch((error) => console.error('エラーが発生しました。', error))
    }, [])

    const selectAddressButton = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectAddress(e.target.value)
    }

    if (!addresses) return <div>Loading...</div>

    return (
        <div className="h-screen flex">
            <div className='w-1/2 bg-white p-8 flex items-center justify-center'>
                <form onSubmit={onClickEditButton} className="space-y-4 max-w-md w-full">
                    <h1 className="text-center text-3xl text-gray-600">＜EDIT＞</h1>

                    <p className="mt-6 flex items-center">
                        <label
                            htmlFor="name"
                            className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                        >
                            Name：
                        </label>
                        <Form
                            type="text"
                            onChange={editName}
                            value={name}
                            name="name"
                            placeholder="名前を入力して下さい"
                            className=" w-64 border-gray-300 rounded"
                        />
                    </p>
                    <p className="flex items-center">
                        <label
                            htmlFor="email"
                            className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                        >
                            Email：
                        </label>
                        <Form
                            type="email"
                            onChange={editEmail}
                            value={email}
                            name="email"
                            placeholder="メールアドレスを入力して下さい"
                            className="w-64 border border-gray-300 p-2 rounded"
                        />
                    </p>
                    <p className="flex items-center">
                        <label
                            htmlFor="tel"
                            className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                        >
                            Tel：
                        </label>
                        <Form
                            type="tel"
                            onChange={editPhoneNumber}
                            value={phoneNumber}
                            name="tel"
                            placeholder="電話番号を入力して下さい"
                            className="w-64 border border-gray-300 p-2 rounded"
                        />
                    </p>
                    <p className="flex items-center">
                        <label
                            htmlFor="address"
                            className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                        >
                            Address：
                        </label>
                        <select
                            value={selectAddress}
                            name="address"
                            onChange={selectAddressButton}
                            className="w-64 border border-gray-300 p-2 rounded"
                        >
                            <option value="">選択してください</option>
                            {addresses.map((address, index) => {
                                return (
                                    <option key={index}>{address.prefName}</option>
                                )
                            })}
                        </select>
                    </p>
                    <p className="flex items-center">
                        <label
                            htmlFor="image"
                            className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                        >
                            Image：
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            name="image"
                            onChange={editProfileImage}
                        />
                    </p>
                    <p className="mt-2 text-center">
                        <Button type="submit" variant="contained" color="success">
                            登録
                        </Button>
                        <Button
                            type="reset"
                            variant="outlined"
                            color="success"
                            className="ml-6"
                        >
                            リセット
                        </Button>
                        <Button
                            type="button"
                            onClick={onClickAllDelete}
                            variant="outlined"
                            color="error"
                            className="ml-6"
                        >
                            全削除
                        </Button>
                    </p>
                </form>
            </div>

                        {/* 右側に一覧で配置 */}
            <div className="w-1/2 bg-gray-100 p-8 overflow-y-auto">
            <div className='space-y-4 w-2/3 max-w-2xl mx-auto'>
                {/* imgタグを使用するとLCPの速度が遅くなるため、(next/image)の<image>を使用することを推奨(翻訳文) */}
                {/* filterメソッドを使用して、nameが空欄のカードは作成されない仕様にしている(他の要素も追加したければ&&で他要素を追加する) */}
                {keep
                    .filter((item) => item.name)
                    .map((item, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white border border-gray-200 shadow-lg flex items-center space-x-8 flex-wrap"
                        >
                            {item.profileImage && (
                                <img
                                    src={item.profileImage}
                                    className="w-32 h-32 rounded-full object-cover mr-2"
                                    alt="Not Image"
                                />
                            )}
                            <div className="flex flex-col space-y-2">
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                                <p>{item.phoneNumber}</p>
                                {selectAddress && <p>{item.selectAddress}</p>}
                                {item.name && (
                                    <Button
                                        type="button"
                                        onClick={() =>
                                            onClickDeleteButton(index)
                                        }
                                        variant="outlined"
                                        color="success"
                                    >
                                        DELETE
                                    </Button>
                                )}
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}
