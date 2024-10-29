"use client"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import { IconButton } from '@mui/material';

//いいねボタンのコンポーネントを作る
//ボタンを押したら＋１増えていく
//ボタン横にカウント数を表示させる

export function FavoriteButton () {
    const [favoriteItems, setFavoriteItems] = useState("");

    const onClickFavorite = () => {
    }
    
    return(
        <div>
            {/* イイネしたらこっち */}
            <IconButton>
                <LocalFloristIcon/>
            </IconButton>
            {/* イイネしてない時こっち */}
            <IconButton>
                <LocalFloristOutlinedIcon/>
            </IconButton>
        </div>
    )
}