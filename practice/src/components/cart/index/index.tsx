"use client"
import React, { useState } from "react";

export function SampleFetch () {
    const FetchData = () => {
        const [data, setData] = useState(undefined);

        fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => alert("error"));

        console.log(data)
        return <></>;
    }
    return<></>
};

export default SampleFetch;