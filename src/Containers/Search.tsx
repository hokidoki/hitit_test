import React,{useState}from 'react'
import { SearchBox, SearchContainer } from '../styled/layout'
import SearchInput from '../Components/SearchInput'




export default function Search() {

    const [searchList,setSearchList] = useState([]);
    
    const movieTitleSearch = async (title : string, page : number = 1) => {
        const URL = await fetch(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=ac2eb9f1`);
        //추후 Appkey변경 .
        //s = title
        //page = 1 < n < 100
        const getJson = await URL.json();

        console.log(getJson);
    } 
    
    return (
        <SearchContainer>
            <SearchBox>
                <SearchInput movieTitleSearch={movieTitleSearch}></SearchInput>
            </SearchBox>
            {/* <button onClick={movieTitleSearch}>더미</button> */}
        </SearchContainer>
    )
}
