import React,{useState} from 'react'

import {
    Input,
    ErrorMessage
} from '../styled/layout'

interface SearchInputProps {
    movieTitleSearch : (title : string) => void,
    error : string
}

export default function SearchInput({ movieTitleSearch,error } : SearchInputProps){

    const [value, setValue] = useState("");
    
    const onSubmit = (e : any) => {
        e.preventDefault();
        movieTitleSearch(value);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Input type="text" value={value} placeholder="Search Movie" onChange={(e) => setValue(e.target.value)}/>
            </form>
            <ErrorMessage>
                {error}
            </ErrorMessage>
        </>
    )
}
