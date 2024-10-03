"use client"

import { useState } from "react";
import { Button } from "@mui/material";

export function EditPage () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [profileImage, setProfileImage] = useState("")
    const [keep, setKeep] = useState<{name:string, email:string, phoneNumber:string, profileImage:string | null}>({
        name:"",
       email:"",
        phoneNumber:"",
        profileImage:null,
     });

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

    const onClickEditButton = () => {
        const myProfile = {name, email, phoneNumber, profileImage};
            setKeep(myProfile);
    };

    return(
        <div className="text-center">
            <form>
            <p className="mt-2">
                    氏名：
                    <input
                    type="name"
                    onChange={editName}
                    placeholder="名前を入力して下さい"
                    className="w-64"
                    />
                </p>
                <p className="mt-2">
                    Email：
                    <input
                    type="email"
                    onChange={editEmail}
                    placeholder="メールアドレスを入力して下さい"
                    className="w-64"
                    />
                </p>
                <p className="mt-2">
                    TEL：
                    <input
                    type="tel"
                    onChange={editPhoneNumber}
                    placeholder="電話番号を入力して下さい"
                    className="w-64"
                    />
                </p>
                <p className="mt-2">
                    プロフィール画像：
                    <input
                    type="file"
                    accept="image/*"
                    onChange={editProfileImage}
                    />
                </p>
                <p className="mt-2">
                    <Button onClick={onClickEditButton} variant="contained">登録</Button>
                </p>
            </form>
            <div className="mt-8 flex items-center justify-center">
                {keep.profileImage && (
                    <img
                    src={keep.profileImage}
                    className="w-52 h-52 text-center rounded-full object-cover mr-2"
                    alt="Not Image"
                    />
                )}
                <div className="flex flex-col space-y-2">
                    <p>{keep.name}</p>
                    <p>{keep.email}</p>
                    <p>{keep.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}