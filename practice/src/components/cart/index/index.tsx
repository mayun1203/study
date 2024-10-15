'use client'
import React, { useEffect, useState } from 'react'

type PrefectureType = {
    prefCode: number
    prefName: string
}

export function SampleFetch() {
    const [prefectures, setPrefectures] = useState<PrefectureType[]>([])
    const [selectedPrefecture, setSelectedPrefecture] = useState('')

    useEffect(() => {
        fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'U6fiPXv6CEOyv6bxGBIFnqvBdofnq6roBjMUpShC',
            },
        })
            // レスポンスをJSONに変換
            .then((response) => response.json())
            // 取得したデータをtaskに保存
            .then((data) => setPrefectures(data.result))
            .catch((error) => console.error('Fetch data failed', error))
    }, [])

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        setSelectedPrefecture(event.target.value)
    }

    if (!prefectures) return <div>Loading...</div>

    return (
        <div>
            <h1>Task Information</h1>
            <select
                value={selectedPrefecture}
                onChange={(e) => selectChange(e)}
            >
                <option value="">選択して下さい</option>
                {prefectures.map((prefecture, index) => {
                    return (
                        <option key={index} value={prefecture.prefCode}>
                            {prefecture.prefName}
                        </option>
                    )
                })}
            </select>
            {/* 選択した都道府県の表示 */}
            {selectedPrefecture && (
                <p>
                    選択された都道府県：{' '}
                    {prefectures[Number(selectedPrefecture) - 1].prefName}
                </p>
            )}
        </div>
    )
}

{
    /* ただただAPIをそのまま出すコード */
}
// {/* <p className="container" key={task.id}>
// {task.result.map((result) => {
//     return (
//         <div className="task" key={task.id}>
//             <p>{result.prefCode}:{result.prefName}</p>
//         </div>
//     );
// })}
// </p>
