"use client"
import React, { useState } from "react";
import { Button } from "@mui/material";

export function MoneyNoteBook () {
    const [textValue, setTextValue] = useState("");
    const [moneyValue, setMoneyValue] = useState("");
    const [total, setTotal] = useState<string[]>([]);

    const inputText = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value)
    }

    const inputMoney = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMoneyValue(e.target.value)
    }

    const onClickTotalButton = () => {
        const myMoney = [textValue, moneyValue];
        setTotal(myMoney);
        setTextValue("");
        setMoneyValue("");
    }
    return(
        <div>
            {/* <select value={}>
                <option value={""}>選択して下さい</option>
                <option>収入</option>
                <option>支出</option>
            </select> */}
            <form>
                <label htmlFor="text">内容</label>
                <input type="text" onChange={inputText} value={textValue} className="border"/>
                <label htmlFor="number">金額</label>
                <input type="text" onChange={inputMoney} value={moneyValue} className="border"/>円
                <Button type="button" onClick={onClickTotalButton}>追加</Button>
            </form>
            <p>{textValue}{moneyValue}{total}</p>
        </div>
    )
}