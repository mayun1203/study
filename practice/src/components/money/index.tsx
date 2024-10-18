'use client'
import React, { useState } from 'react'
import { Button } from '@mui/material'

export function MoneyNoteBook() {
    // type textContents = { id: number; content: string }

    // 支出カテゴリー
    const textContentsCategory = [
       '食費',
       '日用雑貨',
       '交際費',
       '医療費',
    ]

    const [textValue, setTextValue] = useState('')
    const [moneyValue, setMoneyValue] = useState('')
    const [category, setCategory] = useState(textContentsCategory)
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

    const onClickTotalButton = () => {
        const amount = parseFloat(moneyValue)
        if (!isNaN(amount)) {
            setTotal([
                ...total,
                {
                    category: category,
                    paycheck: paycheck,
                    textValue: textValue,
                    moneyValue: amount,
                },
            ])
            setTextValue('');
            setMoneyValue('');
            setPaycheck('');
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
        <div className="w-full mx-auto h-screen bg-yellow-100">
            <div className="mx-auto max-w-lg h-full">
            <h1 className="text-center mt-10 text-3xl">🏠家計簿をつけよう📝</h1>

            {/* <select onChange={selectMoneyCategory} value={moneyCategory} className="mt-5 border-2 border-y-orange-700 rounded-md">
                    <option value="支出">　支出　　</option>
                    <option value="収入">収入</option>
                </select> */}
            <p className="flex item-center">
                <label htmlFor="text">給料：</label>
                <input
                    type="number"
                    onChange={(e)=>setPaycheck(e.target.value)}
                    value={paycheck}
                    placeholder="収入を入力して下さい"
                    className="mt-5 ml-10 border"
                />
            </p>
            <p className="flex item-center">
                <select value={textContentsCategory} className="mt-3 border-2 border-orange-400 rounded-md">
                    <option value={''}>カテゴリー</option>
                    <option>食費</option>
                    <option>日用雑貨</option>
                    <option>交際費</option>
                    <option>医療費</option>
                </select>
                <input
                    type="text"
                    onChange={(e)=>setTextValue(e.target.value)}
                    value={textValue}
                    placeholder="内容を入力して下さい"
                    className="mt-5 border"
                />
            </p>
            <p className="flex item-center">
                <input
                    type="number"
                    onChange={(e)=>setMoneyValue(e.target.value)}
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
        </div>
    )
}
