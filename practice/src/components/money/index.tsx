'use client'
import React, { useState } from 'react'
import { Button } from '@mui/material'

export function MoneyNoteBook() {
    type textContents = { id: number; content: string }

    // 支出カテゴリー
    // const textContentsCategory = [
    //     { id: 1, content: 'カテゴリー' },
    //     { id: 2, content: '食費' },
    //     { id: 3, content: '日用雑貨' },
    //     { id: 4, content: '交際費' },
    //     { id: 5, content: '医療費' },
    // ]

    const [textValue, setTextValue] = useState('')
    const [moneyValue, setMoneyValue] = useState('')
    const [category, setCategory] = useState<textContents[]>([])
    const [moneyCategory, setMoneyCategory] = useState('支出')
    const [paycheck, setPaycheck] = useState('')
    const [total, setTotal] = useState<
        {
            category: string
            paycheck: string
            textValue: string
            moneyValue: number
            moneyCategory: string
        }[]
    >([])

    const myPaycheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaycheck(e.target.value)
    }

    const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value)
    }

    const inputMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMoneyValue(e.target.value)
    }

    const selectMoneyCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMoneyCategory(e.target.value)
    }

    // const payTable = () = {
    //     setCategory([])
    // }

    const onClickTotalButton = () => {
        const amount = parseFloat(moneyValue)
        if (!isNaN(amount)) {
            setTotal([
                ...total,
                {
                    category: moneyCategory,
                    paycheck: paycheck,
                    textValue: textValue,
                    moneyValue: amount,
                    moneyCategory,
                },
            ])
            setMoneyValue('')
        }
    }

    console.log(total)
    // [{
    //     category: string;
    //     paycheck: string;
    //     textValue: string;
    //     moneyValue: number;
    //     moneyCategory: string;
    // },]
    const filtered = total.filter((item) => {
        return item.moneyCategory === '支出'
    })
    console.log(filtered)

    const totalExpense = filtered.reduce((acc, item) => {
        return acc + item.moneyValue
    }, 0)

    function sample(age: number, country: string) {
        return `${age}歳 ${country}出身`
    }

    console.log(sample(24, '日本'))
    console.log(sample(30, '中国'))

    return (
        <div className="max-w-lg mx-auto">
            {/* <select onChange={selectMoneyCategory} value={moneyCategory} className="mt-5 border-2 border-y-orange-700 rounded-md">
                    <option value="支出">　支出　　</option>
                    <option value="収入">収入</option>
                </select> */}
            <p className="flex item-center">
                <label htmlFor="text">給料：</label>
                <input
                    type="text"
                    onChange={myPaycheck}
                    value={paycheck}
                    placeholder="収入を入力して下さい"
                    className="mt-5 ml-10 border"
                />
            </p>
            <p className="flex item-center">
                <select className="mt-3 border-2 border-orange-400 rounded-md">
                    <option value={''}>カテゴリー</option>
                    <option>食費</option>
                    <option>日用雑貨</option>
                    <option>交際費</option>
                    <option>医療費</option>
                </select>
                <input
                    type="text"
                    onChange={inputText}
                    value={textValue}
                    placeholder="内容を入力して下さい"
                    className="mt-5 border"
                />
            </p>
            <p className="flex item-center">
                <></>
                <input
                    type="text"
                    onChange={inputMoney}
                    value={moneyValue}
                    placeholder="金額を入力して下さい"
                    className="mt-3 ml-10 border"
                />
                円
            </p>
            <Button
                type="button"
                onClick={onClickTotalButton}
                variant="outlined"
                color="error"
                className="ml-10"
            >
                追加
            </Button>
            <div className="mt-20 w-auto text-center text-2xl border-double border-b-8 border-orange-900">
                <span className="ml-2">収入：{paycheck}円</span>
                <span className="ml-7">支出総額：{totalExpense}円</span>
                <span className="ml-7">残高：円</span>
            </div>

            {total.map((sum, index) => (
                <p key={index} className="mt-3 text-lg">
                    {sum.category && <span>【{sum.category}】</span>}
                    {sum.textValue && <span>{sum.textValue}：</span>}
                    {sum.moneyValue && <span>{sum.moneyValue}円</span>}
                </p>
            ))}
            <table className=" text-center mt-3 w-3/4 border-collapse border border-slate-400">
                <thead>
                    <tr className="border-b border-gray-500">
                        <th>食費</th>
                        <th>日用雑貨</th>
                        <th>交際費</th>
                        <th>医療費</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a円</td>
                        <td>b円</td>
                        <td>c円</td>
                        <td>d円</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
