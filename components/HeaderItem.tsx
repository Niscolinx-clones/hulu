
interface HeaderItemProps {
    title: string
    Icon?: any
}

function HeaderItem({title, icon}: HeaderItemProps) {
    return (
        <div>
            <icon/>
            {title}
        </div>
    )
}

export default HeaderItem
