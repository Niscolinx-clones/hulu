
interface HeaderItemProps {
    title: string
    Icon?: any
}

function HeaderItem({title}: HeaderItemProps) {
    return (
        <div>
            {title}
        </div>
    )
}

export default HeaderItem
