import React, { useState } from 'react'
import { SearchBox, SearchContainer,Select } from '../styled/layout'
import SearchInput from '../Components/SearchInput'
import SearchList from '../Components/SearchList';

export interface InterfaceShortResult {
    Title: string,
    Poster: string,
    Type: string,
    Year: string,
    imdbID: string
}

interface InterfaceSearchingResult {
    title: string,
    list: Array<InterfaceShortResult>,
    page: number,
    error: string
}
interface InterfaceSelectBoxProps {
    sortBy : SortBy,
    setSortBy : (sortBy : SortBy) => void
}

export enum SortBy {
    standard,
    titleAsc,
    titleDes,
    yearAsc,
    yearDes,
}

export default function Search() {

    const [sortBy,setSortBy] = useState<SortBy>(SortBy.standard);
    const [searchingResult, setSerachingResult] = useState<InterfaceSearchingResult>({
        title: "",
        list: [],
        page: 0,
        error: "",
    })

    const movieTitleSearchFetch = async (title: string = "", page: number = 1) => {
        const URL = await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=ac2eb9f1`);
        //추후 Appkey변경 .
        //s = title
        //page = 1 < n < 100
        const getJson = await URL.json();
        console.log(getJson)
        const searchingResult: Array<InterfaceShortResult> =
            getJson.Response === "True" ?
                [...getJson.Search] : []
        const error = getJson.Error || "";
        //문제 : 동일한 title을 검색한 경우, 검색을 허용 할 것인가 ? 
        //해답 : 동일한 title이라도 DB에 update된 결과가 존재 할수 있다. 
        const response = { searchingResult, error }
        return response;
    }
    const movieTitleSearch = async (title: string) => {
        const response = await movieTitleSearchFetch(title);
        console.log(response.error)
        setSerachingResult({
            title: title,
            list: response.searchingResult,
            page: 1,
            error: response.error
        })
    }

    const movieTitleSearchingUpdate = async (title: string, page: number) => {
        const response = await movieTitleSearchFetch(title, page);
        setSerachingResult({
            title: title,
            list: [...searchingResult.list, ...response.searchingResult],
            page: page,
            error: response.error
        })
    }

    return (
        <SearchContainer>
            <SearchBox>
                <h3 style={{ "padding": "5px", "position" : "relative"}}>
                    Search
                    <SelectBox 
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
                </h3>
                <SearchInput
                    movieTitleSearch={movieTitleSearch}
                    error={searchingResult.error}
                />
            </SearchBox>
            <SearchList 
                sortBy={sortBy}
                list={searchingResult.list}
                title={searchingResult.title}
                page={searchingResult.page}
                update={movieTitleSearchingUpdate}
            />
        </SearchContainer>
    )
}

function SelectBox({sortBy,setSortBy} : InterfaceSelectBoxProps) {
    
    return (
        <>
            <select onChange={(e : any) => setSortBy(Number(e.target.value))}
                value={sortBy}
                style={{"border" : "none", "position" : "absolute", "right" : "0","bottom" : "4px"}}
                >
                <option value={SortBy.standard}>Standard</option>
                <option value={SortBy.titleAsc}>Title asc</option>
                <option value={SortBy.titleDes}>Title des</option>
                <option value={SortBy.yearAsc}>Year asc</option>
                <option value={SortBy.yearDes}>Year des</option>
            </select>
        </>
    )
}