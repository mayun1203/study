"use client"

import { Button } from "@mui/material";
import { useState } from "react"

export function MyToDoList () {
    const [form, setForm] = useState("");
    const [list, setList] = useState("");

    const myForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value);
    }

    const addButton = () => {
        setList(form);
    }
    return(
        <div>
            <form>
                <input
                type="text"
                onChange={myForm}
                placeholder="今日は何をしますか？"
                className="w-80 text-center"
                />
            </form>
            <Button
                onClick={addButton}
                variant="contained">
                    項目を追加する
            </Button>
            <ul>
                <li>
                    {list}
                </li>
            </ul>
        </div>
    )
}