"use client"

import { Button } from "@mui/material";
import { useState } from "react"

export function MyToDoList () {
    const [form, setForm] = useState("");
    const [list, setList] = useState<string[]>([]);

    const myForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value);
    }

    const addButton = () => {
        if (form.trim()){
            setList([...list, form]);
            setForm("");
        };
    }

    const deleteItem = (index: number) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    };

    return(
        <div>
            <form>
                <input
                type="text"
                onChange={myForm}
                placeholder="今日は何をしますか？"
                className="m-3 w-80 h-12 text-center outline outline-blue-500"
                />
            </form>
            <Button
                onClick={addButton}
                variant="contained">
                    項目を追加する
            </Button>
            <div className="mt-5 text-3xl">
            {list.map((item, index)=>(
                        <p key = {index}>
                            {item}
                            {/*
                            <Button
                            onClick={}
                            variant="contained"
                            className="ml-4 text-xs">
                                完了
                            </Button> */}
                            <Button
                            onClick={() => deleteItem(index)}
                            variant="contained"
                            className="ml-4 text-xs">
                                削除
                            </Button>
                        </p>
                    ))}
            </div>
        </div>
    )
}