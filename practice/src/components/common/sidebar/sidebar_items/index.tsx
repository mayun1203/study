import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const SidebarItems = [
    {
        title: "Money",
        icon: <MonetizationOnOutlinedIcon />,
        link: "/money"
    },
    {
        title: "ToDoList",
        icon: <ListAltOutlinedIcon />,
        link: "/todo_list"
    },
    {
        title: "Edit",
        icon: <BuildOutlinedIcon />,
        link: "/edit"
    }
]