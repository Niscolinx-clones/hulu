import { IconType } from "react-icons"

interface HeaderItemProps {
    title: string
    Icon: IconType
}

function HeaderItem({title, Icon}: HeaderItemProps) {
    return (
        <div>
            <Icon/>
            {title}
        </div>
    )
}

export default HeaderItem
