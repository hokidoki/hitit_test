import React from 'react'
import { DummyContext } from '../App'
import { SortBy } from '../Containers/Search'
import {
    SearchListBox,
    SearchTab,
    Thumbnail,
    ShortBox
} from '../styled/layout'
import { sortedList } from '../functions/sort';

interface InterfaceShortResult {
    Title: string,
    Poster: string,
    Type: string,
    Year: string,
    imdbID: string
}

interface InterfaceSearchListProps {
    title: string,
    list: Array<InterfaceShortResult>,
    page: number,
    sortBy : SortBy,
    update: (title: string, page: number) => void
}

export default function SearchList({ list, title, page,sortBy, update }: InterfaceSearchListProps) {

    const resultToTab = (list: Array<InterfaceShortResult>) => {
        return sortedList(list,sortBy).map((shortResult: InterfaceShortResult,index : number) => {
            return <Tab
                key={`${shortResult.imdbID}-${index}`}
                Title={shortResult.Title}
                Type={shortResult.Type}
                Year={shortResult.Year}
                imdbID={shortResult.imdbID}
                Poster={shortResult.Poster}
            />
        })
    }

    const onScroll = (e: any) => {

        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;

        if (scrollHeight === scrollTop + clientHeight) {
            update(title, page + 1);
        }
    }

    return (
        <SearchListBox onScroll={onScroll}>
            {resultToTab(list)}
        </SearchListBox>
    )
}

function Tab({ Title, Type, Year, imdbID, Poster }: InterfaceShortResult) {
    
    return (
        <DummyContext.Consumer>
            {
                value => (
                    <SearchTab onClick={()=> value.getMovieDetailFetch(imdbID)}>
                        <Thumbnail src={Poster}></Thumbnail>
                        <ShortBox>
                            <h3 style={{"height" : "50%"}} title={Title}>{Title}</h3>
                            {Year}
                        </ShortBox>
                    </SearchTab>
                )
            }

        </DummyContext.Consumer>
    )
}


