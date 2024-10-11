'use client'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'

export function SunButton() {
    const { push } = useRouter()
    const handleSunButton = () => {
        const useConfirmed = window.confirm('本当に遷移しますか？')
        if (useConfirmed) {
            push('/sun')
        }
    }

    const handleMoonButton = () => {
        const useConfirmed = window.confirm('本当に遷移しますか？')
        if (useConfirmed) {
            push('/moon')
        }
    }

    return (
        <div>
            <Button onClick={handleSunButton}>SUN</Button>or
            <Button onClick={handleMoonButton}>MOON</Button>
        </div>
    )
}
