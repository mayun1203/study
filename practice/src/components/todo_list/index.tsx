"use client"

import { Button } from "@mui/material";
import { useState } from "react"

export function MyToDoList () {
    const [form, setForm] = useState("");
    // completed(boolean)が完了状態(true/false)を表します
    const [list, setList] = useState<{ task: string; completed: boolean}[]>([]);
    // 編集中んの項目を管理
    const [editIndex, setEditIndex] = useState<number | null>(null);
    console.log(editIndex, "editIndex")

    const myForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value);
    }

    // 項目追加ボタン関数
    const addButton = () => {
        if (form.trim()){
            // 新しい項目を「未完了状態」でリストに追加
            setList([...list, { task: form, completed: false}]);
            setForm("");
        }
    };

    // 編集ボタン関数
    const editTask = (index: number) => {
        setEditIndex(index);
        // 現在のタスクの内容を更新
        setForm(list[index].task);
    };

    // 編集後の保存ボタン関数
    const updateTask = () => {
        const newList = list.map((item, i) => {
            console.log(item,"item")
            if (i === editIndex){
                // 編集したタスクの内容を更新
                return{...item, task: form};
            }
            // 他のタスクはそのまま
            return item;
        });
        setList(newList);
        setForm("");
        setEditIndex(null);
    };

    // 編集をキャンセルする関数
    const cancelEdit = () => {
        setEditIndex(null);
        setForm("");
    };

    // 削除ボタン関数
    const deleteItem = (index: number) => {
        const userConfirmed = window.confirm("本当に削除しますか？");
        if (userConfirmed){
            const newList = list.filter((aaa, i) => {
                console.log(aaa, "aaa")
                console.log(i, "i")
                console.log(index, "index")
                console.log(i !== index, "条件式")
                return i !== index});
            setList(newList);
        }
    };

    // 状態切り替えのボタン関数
    const completeItem = (index: number) => {
        // 完了状態を切り替え
        const newList = list.map((item, i) => {
            if (i === index) {
                return {...item, completed: !item.completed};
            }
            return item;
        });
        setList(newList)
    }

    return(
        <div>
            <form>
                <input
                type="text"
                onChange={myForm}
                placeholder="今日は何をしますか？"
                className="m-3 w-80 h-12 text-center outline outline-blue-500"
                value={form}
                />
            </form>
            <Button
                onClick={editIndex === null ? addButton : updateTask}
                variant="contained">
                    {editIndex === null ? "項目を追加する" : "保存"}
            </Button>
            {editIndex !== null && (
                <Button
                onClick={cancelEdit}
                variant="outlined">
                    キャンセル
                </Button>
            )}
            <div className="mt-8 text-xl">
            {list.map((item, index)=>(
                <li key = {index}>
                    <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                        {item.task}
                        <Button
                        onClick={()=> completeItem(index)}
                        variant="contained"
                        className="mt-2 ml-4">
                            {item.completed ? "未完了" : "完了"}
                        </Button>
                        <Button
                        onClick={()=> deleteItem(index)}
                        variant="contained"
                        className="mt-2 ml-2">
                            削除
                        </Button>
                        <Button
                        onClick={()=> editTask(index)}
                        variant="contained"
                        className="mt-2 ml-2">
                            編集
                        </Button>
                    </span>
                </li>
                    ))}
            </div>
        </div>
    );
}