import { IconType } from "react-icons"

interface HeaderItemProps {
    title: string
    Icon: IconType
}

function HeaderItem({title, Icon}: HeaderItemProps) {
    return (
        <div>
            <Icon className='h-8 mb-1'/>
            <p className='opacity-0  hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem
