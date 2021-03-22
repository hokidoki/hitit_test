import React,{useState}from 'react'
import { SearchBox, SearchContainer } from '../styled/layout'
import SearchInput from '../Components/SearchInput'

interface InterfaceShortResult{
    Title : string,
    Poster : string,
    Type : string,
    Year : string,
    imdbID : string
}

interface InterfaceSearchingResult {
    title : string,
    list : Array<InterfaceShortResult> ,
    page : number
}

export default function Search() {

    const [searchingResult, setSerachingResult] = useState<InterfaceSearchingResult>({
        title : "",
        list : [],
        page : 0
    })
    
    const movieTitleSearchFetch = async (title : string = "",page : number = 1) => {
        const URL = await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=ac2eb9f1`);
        //추후 Appkey변경 .
        //s = title
        //page = 1 < n < 100
        const getJson = await URL.json();
        console.log(getJson)
        const searchingResult : Array<InterfaceShortResult>  = [...getJson.Search]
        //문제 : 동일한 title을 검색한 경우, 검색을 허용 할 것인가 ? 
        //해답 : 동일한 title이라도 DB에 update된 결과가 존재 할수 있다. 
        return searchingResult;
    }
    const movieTitleSearch = async (title : string) => {
        const getList = await movieTitleSearchFetch(title);
        setSerachingResult({
            title : title,
            list : getList,
            page : 1
        })
    } 

    const movieTitleSearchingUpdate = async (title : string,page : number) => {
        const getList = await movieTitleSearchFetch(title,page);
        setSerachingResult({
            title : title,
            list : [...searchingResult.list,...getList],
            page : page
        })
    }

    
    return (
        <SearchContainer>
            <SearchBox>
                <SearchInput movieTitleSearch={movieTitleSearch}></SearchInput>
            </SearchBox>
        </SearchContainer>
    )
}
