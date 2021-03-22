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
    
    const movieTitleSearch = async (title : string, page : number = 1) => {
        const URL = await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=ac2eb9f1`);
        //추후 Appkey변경 .
        //s = title
        //page = 1 < n < 100
        const getJson = await URL.json();

        //Todo 동일한  title이 전달 되면 결과 push
        //Todo 동일하지 않다면 새로운 list제공
        let list : Array<InterfaceShortResult> = title == searchingResult.title ? 
            [...searchingResult.list,...getJson] : 
            [...getJson];

        setSerachingResult({
            title,
            list,
            page
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
