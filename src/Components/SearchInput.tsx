import React,{useState} from 'react'

import {
    Input
} from '../styled/layout'

interface SearchInputProps {
    movieTitleSearch : (title : string) => void
}

export default function SearchInput({ movieTitleSearch } : SearchInputProps){

    const [value, setValue] = useState("");
    
    const onSubmit = (e : any) => {
        e.preventDefault();
        movieTitleSearch(value);
    }

    return (
        <>
            <h3 style={{"padding" : "5px"}}>
                Search
            </h3>
            <form onSubmit={onSubmit}>
                <Input type="text" value={value} placeholder="Search Movie" onChange={(e) => setValue(e.target.value)}/>
            </form>
        </>
    )
}
