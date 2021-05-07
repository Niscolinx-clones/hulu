interface Iresult {
    [key: string]: string | number | boolean | Array<string> | Array<number>
}
interface IndexProps {
    results: Array<Iresult>
}
