import {IMovie} from "@/models/IMovie";

export interface IPageMovie{
    page: number
    results: IMovie[]
}