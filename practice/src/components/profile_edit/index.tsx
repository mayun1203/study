"use client"

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react"
// import { Button } from "@mui/material";

export function MyProfileEdit () {
    // type Profile = { username:string, email:string, phoneNumber:number|null, profileImage:File|null }
    // const [profile , setProfile] = useState<Profile>({
    //     userName: "",
    //     email:"",
    //     phoneNumber:null,
    //     profileImage:null,
    // });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null >(null);
    const {push} = useRouter();

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };

    const changeIntroduction = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntroduction(e.target.value)
    };

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const clickButton = () => {
        const useConfirmed = window.confirm("本当に変更しますか？");
        const profileData = { name, email, introduction, image: preview };
        localStorage.setItem("profileData", JSON.stringify(profileData));
            push("profile");
    };


    return(
        <div>
            <form>
                <p>氏名：<input type="name" onChange={changeName} placeholder="名前を入力して下さい" style={{ outline:"2px solid#4CAF50", marginTop:"20px" }}/></p>
                {/* email */}
                <p>Email：<input type="email" onChange={changeEmail} placeholder="メールアドレスを入力して下さい" style={{ outline:"2px solid#4CAF50", marginTop:"20px" }}/></p>
                {/* phone */}
                <p>自己紹介：<input type="text" onChange={changeIntroduction} placeholder="自己紹介を入力して下さい" style={{ outline:"2px solid#4CAF50", marginTop:"20px" }}/></p>
                {/* image */}
                <label htmlFor="file-upload">
                    画像を選択
                </label>
                <input
                id="file-upload"
                type="file"
                multiple accept="image/jpeg. image/png"
                style={{ marginTop:"10px" }}
                onChange={changeImage}
                />
            </form>
            <Button onClick={clickButton} variant="contained" >登録</Button>
        </div>
    );
}