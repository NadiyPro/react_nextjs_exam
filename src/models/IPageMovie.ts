import {IMovie} from "@/models/IMovie";

export interface IPageMovie{
    genres:[];
    page: number
    results: IMovie[]
}