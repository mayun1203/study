'use client'
import { useState, useEffect } from 'react'

export function CurrentDate() {
    const [currentDate, setCurrentDate] = useState<string>('')
    useEffect(() => {
        const date = new Date()
        setCurrentDate(date.toLocaleDateString())
    }, [])

    return (
        <div>
            <h1>{currentDate}</h1>
        </div>
    )
}
