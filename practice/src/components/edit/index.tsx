'use client'

import { useEffect, useState } from 'react'
import { Button } from '@mui/material'

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
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredItems, setFilteredItems] = useState<
        {
            name: string
            email: string
            phoneNumber: string
            selectAddress: string
            profileImage: string | null
        }[]
    >([])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }

    const searchButton = () => {
        const filtered = keep.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setFilteredItems(filtered)
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
        setSelectAddress('')
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
        <div className="max-w-lg mx-auto">
            <form onSubmit={onClickEditButton} className="space-y-4">
                <p className="mt-6 flex item-center">
                    <label
                        htmlFor="name"
                        className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                    >
                        Name：
                    </label>
                    <input
                        type="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder="名前を入力して下さい"
                        className=" w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="flex item-center">
                    <label
                        htmlFor="email"
                        className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                    >
                        Email：
                    </label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="メールアドレスを入力して下さい"
                        className="w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="flex item-center">
                    <label
                        htmlFor="tel"
                        className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                    >
                        Tel：
                    </label>
                    <input
                        type="tel"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        placeholder="電話番号を入力して下さい"
                        className="w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="flex item-center">
                    <label
                        htmlFor="address"
                        className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                    >
                        Address：
                    </label>
                    <select
                        value={selectAddress}
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
                <p className="flex item-center">
                    <label
                        htmlFor="image"
                        className="w-1/4 text-right pr-4 text-sm font-medium text-gray-700"
                    >
                        Image：
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={editProfileImage}
                    />
                </p>
                <p className="mt-2">
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
                <p>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="キーワードを入力して下さい"
                        className="w-56 text-center border"
                    />
                    <Button
                        onClick={searchButton}
                        variant="outlined"
                        className="ml-3"
                    >
                        検索
                    </Button>
                </p>
                <div className="mt-8 flex flex-col justify-center items-center">
                    {/* imgタグを使用するとLCPの速度が遅くなるため、(next/image)の<image>を使用することを推奨(翻訳文) */}
                    {/* filterメソッドを使用して、nameが空欄のカードは作成されない仕様にしている(他の要素も追加したければ&&で他要素を追加する) */}
                    {keep
                        .filter((item) => item.name)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="flex space-x-8 mt-4 mb-8 w-full p-6 bg-white border border-gray-200 shadow-lg "
                            >
                                {item.profileImage && (
                                    <img
                                        src={item.profileImage}
                                        className="w-52 h-52 rounded-full object-cover mr-2"
                                        alt="Not Image"
                                    />
                                )}
                                <div className="flex flex-col space-y-2">
                                    <p>{item.name}</p>
                                    <p>{item.email}</p>
                                    <p>{item.phoneNumber}</p>
                                    {item.selectAddress && (
                                        <p>{item.selectAddress}</p>
                                    )}
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
                <div>
                    ＜検索結果＞
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <p key={index}>
                                {/* {thing.profileImage && (
                                    <img
                                        src={thing.profileImage}
                                        alt={'${thing.name}のプロフィール'}
                                        className="w-52 h-52 rounded-full object-cover mr-2"
                                    /> */}
                                <p>{item.name}</p>
                                <p>
                                    {item.selectAddress && (
                                        <p>{item.selectAddress}</p>
                                    )}
                                </p>
                            </p>
                        ))
                    ) : (
                        <p>該当するプロフィールがありません</p>
                    )}
                </div>
            </form>
        </div>
    )
}
