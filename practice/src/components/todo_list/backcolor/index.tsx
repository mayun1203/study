'use client'

import { useState } from 'react'
import { Button } from '@mui/material'

export function BackColor() {
    const [darkMode, setDarkMode] = useState(false)

    const backDarkColor = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div
            style={{
                backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
                height: '100vh',
            }}
        >
            <Button onClick={backDarkColor}>
                {darkMode ? 'ライトモード' : 'ダークモード'}に切り替え
            </Button>
        </div>
    )
}
