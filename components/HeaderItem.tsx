import { IconType } from "react-icons"

interface HeaderItemProps {
    title: string
    Icon: IconType
}

function HeaderItem({title, Icon}: HeaderItemProps) {
    return (
        <div className='flex flex-col group cursor-pointer'>
            <Icon className='h-8 mb-19 group-hover:animate-bounce'/>
            <p className='opacity-100 hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem
