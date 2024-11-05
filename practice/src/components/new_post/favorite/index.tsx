'use client'
import React, { useState } from 'react'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined'
import { IconButton } from '@mui/material'

//いいねボタンのコンポーネントを作る
//ボタンを押したら＋１増えていく
//ボタン横にカウント数を表示させる

export function FavoriteButton() {
    const [favoriteItems, setFavoriteItems] = useState(0)

    const onClickFavorite = () => {
        setFavoriteItems((favoriteItems) => favoriteItems + 1)
    }

    return (
        <div>
            {/* イイネしたらこっち */}
            <IconButton onClick={onClickFavorite}>
                {favoriteItems > 0 ? (
                    <LocalFloristIcon />
                ) : (
                    <LocalFloristOutlinedIcon />
                )}
            </IconButton>
            <span>{favoriteItems}</span>
        </div>
    )
}
