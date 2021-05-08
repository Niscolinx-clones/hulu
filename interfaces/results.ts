
export interface Iresult {
    [key: string]:
        | string
        | number
        | boolean
        | Array<string>
        | Array<number>
        | null
}
export interface IndexProps {
    results: Array<Iresult>
}

export interface IThumbnail {
    result: Iresult
}
