// import { useState } from 'react'
import CommentIcon from '@mui/icons-material/Comment'
// import { post } from '@/components/new_post'

export function CommentCount() {
    // const [selectedPost, setSelectedPost] = useState(null)

    //特定の投稿を絞り込む
    // const handleSelectedPost = () => {
    //     const post = post.find((post) => post.id === postId)
    // }

    //コメント投稿の関数

    return (
        <div>
            {/* コメント数の表示をしたい */}
            {/* コメントアイコンを押したら投稿が詳細になりコメント投稿欄がある */}
            {/* コメントが投稿されたらコメント数が増える */}
            <CommentIcon />
        </div>
    )
}
