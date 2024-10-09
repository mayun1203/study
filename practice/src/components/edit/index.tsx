"use client"

import { useEffect, useState } from "react";
import { Button } from "@mui/material";

type AddressList = {prefCode:number, prefName:string}

export function EditPage () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profileImage, setProfileImage] = useState("")
    const [keep, setKeep] = useState<{name:string, email:string, phoneNumber:string, selectAddress:string,  profileImage:string | null}[]>([{
        name:"",
        email:"",
        phoneNumber:"",
        selectAddress:"",
        profileImage:null,
     }]);
    const [addresses, setAddresses] = useState<AddressList[]>([]);
    const [selectAddress, setSelectAddress] = useState("");

    const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const editEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const editPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const editProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return;

        const fileObject = e.target.files[0];
        setProfileImage(window.URL.createObjectURL(fileObject));
    };

    const onClickEditButton = (e: React.FormEvent) => {
        e.preventDefault();
        const myProfile = {name:name, email:email, phoneNumber:phoneNumber, selectAddress:selectAddress, profileImage:profileImage};
        console.log(typeof myProfile, "aaa")
            setKeep([...keep, myProfile]);
            setName("");
            setEmail("");
            setPhoneNumber("");
    };
    // console.log(keep, "bbb")

    const onClickDeleteButton = (index: number) => {
        const userConfirmed = window.confirm("本当に削除しますか？")
        if (userConfirmed) {
            const newMyProfile = keep.filter((_, i) => {return i !== index});
            setKeep(newMyProfile)
        }
     }

     useEffect(() => {
        fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
            method: "GET",
            headers: {"X-API-KEY" : "U6fiPXv6CEOyv6bxGBIFnqvBdofnq6roBjMUpShC"}
        })
        .then(response => response.json())
        .then(data => setAddresses(data.result))
        .catch(error => console.error("エラーが発生しました。", error));
     }, []);

     const selectAddressButton = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectAddress(e.target.value)
     };

     if(!addresses) return <div>Loading...</div>;

    return(
        <div className="text-center">
            <form onSubmit={onClickEditButton}>
                <p className="mt-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">氏名：</label>
                    <input
                        type="name"
                        onChange={editName}
                        value={name}
                        placeholder="名前を入力して下さい"
                        className="w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="mt-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email：</label>
                    <input
                        type="email"
                        onChange={editEmail}
                        value={email}
                        placeholder="メールアドレスを入力して下さい"
                        className="w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="mt-2">
                    <label htmlFor="tel" className="text-sm font-medium text-gray-700">TEL：</label>
                    <input
                        type="tel"
                        onChange={editPhoneNumber}
                        value={phoneNumber}
                        placeholder="電話番号を入力して下さい"
                        className="w-64 border border-gray-300 p-2 rounded"
                    />
                </p>
                <p className="mt-2">
                    <label htmlFor="address" className="text-sm font-medium text-gray-700">住所：</label>
                    <select
                        value={selectAddress}
                        onChange={selectAddressButton}
                        className="w-64 border border-gray-300 p-2 rounded"
                    >
                        <option value="">選択してください</option>
                        {addresses.map((address, index) => {
                            return(
                                <option key={index}>
                                    {address.prefName}
                                </option>
                            )
                        })}
                    </select>
                </p>
                <p className="mt-2">
                    <label htmlFor="image">プロフィール画像：</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={editProfileImage}
                    />
                </p>
                <p className="mt-2">
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        登録
                    </Button>
                    <Button
                        type="reset"
                        variant="outlined"
                        className="ml-24"
                    >
                        リセット
                    </Button>
                </p>
                <div className="mt-8 flex flex-col justify-center items-center">
                    {/* imgタグを使用するとLCPの速度が遅くなるため、(next/image)の<image>を使用することを推奨(翻訳文) */}
                    {keep.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
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
                                {selectAddress && <p>{item.selectAddress}</p>}
                                <Button
                                    type="button"
                                    onClick={()=>onClickDeleteButton(index)}
                                    variant="outlined"
                                >
                                    DELETE
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}