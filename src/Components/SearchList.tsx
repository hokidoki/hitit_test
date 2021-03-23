import React from 'react'
import {
    SearchListBox,
    SearchTab
} from '../styled/layout'


interface InterfaceShortResult{
    Title : string,
    Poster : string,
    Type : string,
    Year : string,
    imdbID : string
}

interface InterfaceSearchListProps {
    title : string,
    list : Array<InterfaceShortResult>,
    page : number,
    update : (title : string,page : number) => void
}

export default function SearchList({list,title,page,update} : InterfaceSearchListProps) {

    const resultToTab = (list : Array<InterfaceShortResult>) => {
        return list.map((shortResult : InterfaceShortResult)=>{
            return <Tab 
            Title={shortResult.Title}
            Type={shortResult.Type}
            Year={shortResult.Year}
            imdbID={shortResult.imdbID}
            Poster={shortResult.Poster}
             />
        })
    }

    const onScroll = (e : any) =>{ 
        
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        
        if(scrollHeight === scrollTop + clientHeight){
            update(title,page + 1);
        }
    }

    return (
        <SearchListBox onScroll={onScroll}>
            {resultToTab(list)}
        </SearchListBox>
    )
}

function Tab({Title,Type,Year,imdbID,Poster} : InterfaceShortResult) {
    return (
        <SearchTab>
            {Title}
        </SearchTab>
    )
}


