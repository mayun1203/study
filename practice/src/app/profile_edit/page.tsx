import { MyProfileEdit } from '@/components/profile_edit'

export default function profileEdit() {
    return (
        <div className="flex, justify-around, text-center">
            <p>＜プロフィール設定＞</p>
            <MyProfileEdit />
        </div>
    )
}
