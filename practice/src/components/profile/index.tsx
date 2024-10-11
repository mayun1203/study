'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@mui/material'

export function MyProfile() {
    const [profile, setProfile] = useState<{
        name: string
        email: string
        introduction: string | null
        image: string | null
    }>({
        name: '',
        email: '',
        introduction: '',
        image: null,
    })
    const { push } = useRouter()

    useEffect(() => {
        const profileData = localStorage.getItem('profileData')
        if (profileData) {
            setProfile(JSON.parse(profileData))
        }
    }, [])
    const clickEditButton = () => {
        push('profile_edit')
    }

    return (
        <div className="text-center">
            <Button onClick={clickEditButton}>編集</Button>
            {profile.image && (
                <img
                    src={profile.image}
                    alt="プロフィール画像"
                    style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '100%',
                    }}
                />
            )}
            <p>{profile.name}</p>
            <p>{profile.email}</p>
            <p>{profile.introduction}</p>
        </div>
    )
}
