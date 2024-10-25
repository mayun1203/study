'use client'
import Link from '@mui/material/Link'

export function Sidebar() {
    return (
        <div>
            <h1 className="font-serif text-4xl">SUN</h1>
            <Link href="about">About</Link>
            <Link href="moon">Moon</Link>
            <Link href="edit">Edit</Link>
            <Link href="money">Money</Link>
            <Link href="todo_list">ToDoList</Link>
        </div>
    )
}
