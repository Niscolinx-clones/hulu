
interface HeaderItemProps {
    title: string
    Icon: any
}

function HeaderItem(props: HeaderItemProps) {
    return (
        <div>
            {props.title}
        </div>
    )
}

export default HeaderItem
