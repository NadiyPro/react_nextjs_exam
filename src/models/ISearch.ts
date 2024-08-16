export interface ISearch{
    page: number
    results: ISearchResult[]
}

export interface ISearchResult {
    id: number
    name: string
}