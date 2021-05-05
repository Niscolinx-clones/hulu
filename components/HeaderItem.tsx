import { IconType } from "react-icons"

interface HeaderItemProps {
    title: string
    Icon: IconType
}

function HeaderItem({title, Icon}: HeaderItemProps) {
    return (
        <div className='flex flex-col group cursor-pointer items-center w-12 sm:w-20 hover:text-white'>
            <Icon className='h-8 mb-19 group-hover:animate-bounce'/>
            <p className='opacity-0'>{title}</p>
        </div>
    )
}

export default HeaderItem
