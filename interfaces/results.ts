export interface Iresult {
    [key: string]: string | number | boolean | Array<string> | Array<number>
    
}
export interface IndexProps {
    results: Array<Iresult>
}
