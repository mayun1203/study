"use client"

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
    // const [phoneNumber, setPhoneNumber] = useState("")
    // const [keep ,setKeep] = useState([]);
    // const [keep ,setKeep] = useState({
    //     name:"",
    //     email:""
    // });



    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };

    // const clickNameButton = () => {
    //     if(name.trim()){
    //         setKeep([...keep, name])
    //         setName("")
    //     }
    // };

    // const clickEmailButton = () => {
    //     if(email.trim()){
    //         setKeep([...keep, email])
    //         setEmail("")
    //     }
    // };

    return(
        <div>
            <form>
                <p>氏名：<input type="text" onChange={changeName} placeholder="名前を入力して下さい"/></p>
                <span>{name}</span>
                {/* email */}
                <p>Email：<input type="text" onChange={changeEmail} placeholder="メールアドレスを入力して下さい"/></p>
                <span>{email}</span>
                {/* phone */}
                <input type="text" />
                {/* image */}
                <input type="text" />
            </form>
        </div>
    );
}