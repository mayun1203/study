'use client'
import React, { useState } from 'react'
import { Button } from '@mui/material'

export function MoneyNoteBook() {
    const [textValue, setTextValue] = useState('');
    const [moneyValue, setMoneyValue] = useState('');
    const [category, setCategory] = useState("");
    const [paycheck, setPaycheck] = useState('');
    const [total, setTotal] = useState<
        {
            category: string;
            paycheck: string;
            textValue: string;
            moneyValue: number;
        }[]
    >([])
    const [income, setIncome] = useState(0);

    const onClickTotalButton = () => {
        const amount = parseFloat(moneyValue);
        if (!isNaN(amount)) {
            setTotal([
                ...total,
                {
                    category: category,
                    paycheck: paycheck,
                    textValue: textValue,
                    moneyValue: amount,
                },
            ]);
            if (paycheck && paycheck !== "") {
                setIncome(parseFloat(paycheck));
            }
            setTextValue('');
            setMoneyValue('');
            setPaycheck('');
        }
    }

    // const totalExpense = () => {
    //     return total.reduce((money, item) => {
    //         return money + (item.moneyValue || 0);
    //     }, 0);
    // };

    const totalExpense = () => total.reduce((money, item) => money + (item.moneyValue || 0), 0);

    const totalByCategory = (targetCategory:string) => {
        return total
        .filter((item) => item.category === targetCategory)
        .reduce((sum, item) => sum + item.moneyValue, 0);
    }

    // function sample(age: number, country: string) {
    //     return `${age}歳 ${country}出身`
    // }

    // console.log(sample(24, '日本'))
    // console.log(sample(30, '中国'))

    return (
        <div className="w-full mx-auto h-screen bg-yellow-100">
            <div className="mx-auto max-w-3xl h-full">
                <h1 className="text-center pt-10 text-3xl">🏠家計簿をつけよう📝</h1>
                <div className='flex flex-col space-y-4 mt-8'>
                <p className="flex items-center justify-center">
                    <label htmlFor="text" className='w-1/5 text-right pr-4'>給料：</label>
                    <input
                        type="number"
                        onChange={(e)=>setPaycheck(e.target.value)}
                        value={paycheck}
                        placeholder="収入を入力して下さい"
                        className="w-1/3 border border-orange-700 p-2"
                    />
                </p>
                <p className="flex items-center justify-center">
                    <select value={category} onChange={(e)=>setCategory(e.target.value)} className="w-1/10 border-less bg-yellow-100 p-2">
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
                        className="w-1/3 ml-9 border border-orange-700 p-2"
                    />
                </p>
                <p className="flex items-center justify-center">
                <label htmlFor="amount" className='w-1/5 text-right pr-4'>金額：</label>
                    <input
                        type="number"
                        onChange={(e)=>setMoneyValue(e.target.value)}
                        value={moneyValue}
                        placeholder="金額を入力して下さい"
                        className="w-1/3 border border-orange-700 p-2"
                    />
                </p>
                <p className="flex items-center justify-center">
                <Button
                    type="button"
                    onClick={onClickTotalButton}
                    variant="contained"
                    color="error"
                    className="w-1/2 ml-10"
                >
                    追加
                </Button>
                </p>
                </div>
                <div className="mt-12 w-auto text-center text-2xl border-double border-b-8 border-orange-700">
                    <span className="ml-2">収入：{income}円</span>
                    <span className="ml-7">支出総額：{totalExpense()}円</span>
                    <span className="ml-7">残高：{(income || 0) - totalExpense()}円</span>
                </div>
                <table className="text-center mt-6 mx-auto w-3/4 h-20 border-collapse border-2 border-orange-800 border-slate-400">
                    <thead>
                        <tr className="border-b-2 border-orange-800">
                            <th>食費</th>
                            <th>日用雑貨</th>
                            <th>交際費</th>
                            <th>医療費</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{totalByCategory('食費')}円</td>
                            <td>{totalByCategory('日用雑貨')}円</td>
                            <td>{totalByCategory('交際費')}円</td>
                            <td>{totalByCategory('医療費')}円</td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-6 w-auto text-center h-56 overflow-y-auto'>
                    {total.map((sum, index) => (
                    <p key={index} className="mt-3 text-lg">
                        {sum.category && <span>【{sum.category}】</span>}
                        {sum.textValue && <span>{sum.textValue}：</span>}
                        {sum.moneyValue && <span>{sum.moneyValue}円</span>}
                    </p>
                ))}
                </div>
            </div>
        </div>
    )
}
