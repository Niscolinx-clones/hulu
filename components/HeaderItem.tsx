
interface HeaderItemProps {
    title: string
    icon: SVGSVGElement
}

function HeaderItem(props: HeaderItemProps) {
    return (
        <div>
            {props.title}
            {props.icon}
        </div>
    )
}

export default HeaderItem
