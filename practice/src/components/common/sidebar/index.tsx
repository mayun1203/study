'use client'
import Link from '@mui/material/Link'
import { SidebarItems } from './sidebar_items'

export function Sidebar() {
    return (
        <div>
            {/* <h1 className="font-serif text-4xl">SUN</h1> */}
            <ul className='flex flex-col justify-center items-center h-screen w-80 bg-gray-400 space-y-8'>
                {SidebarItems.map((value, index)=>(
                    <li key={index} className='text-2xl w-full'>
                        <Link href={value.link} className='flex items-center px-4 gap-2'>
                            <span className='w-1/4 flex justify-center'>{value.icon}</span>
                            <span className='w-2/3'>{value.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
