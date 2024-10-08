"use client"
import React, { useEffect, useState } from "react";

export function SampleFetch () {
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'U6fiPXv6CEOyv6bxGBIFnqvBdofnq6roBjMUpShC'
            }
        })
        // レスポンスをJSONに変換
        .then(response => response.json())
        // 取得したデータをtaskに保存
        .then(data =>setTask(data))
        .catch(error => console.error("Fetch data failed", error));
    }, []);

    if (!task) return <div>Loading...</div>;

    return(
        <div>
            <h1>Task Information</h1>
            <p className="container" key={task.id}>
            {task.result.map((result) => {
                return (
                    <div className="task" key={task.id}>
                        <p>{result.prefCode}:{result.prefName}</p>
                    </div>
                );
            })}
            </p>
        </div>
    )
};