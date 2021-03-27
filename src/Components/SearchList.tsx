import React, { useState,useRef, useEffect } from 'react'
import { DetailContext } from '../App'
import { SortBy } from '../Containers/Search'
import {
    SearchListBox,
    SearchTab,
    Thumbnail,
    ShortBox,
    Loadingoverlay,
    LoadingObject
} from '../styled/styled'
import { sortedList } from '../functions/sort';
import { InterfaceShortResult } from '../Containers/Search'


interface InterfaceSearchListProps {
    loading: boolean,
    title: string,
    list: Array<InterfaceShortResult>,
    page: number,
    sortBy: SortBy,
    update: (title: string, page: number) => void
}

export default function SearchList({ list, title, page, sortBy, loading, update }: InterfaceSearchListProps) {

    const [clickedMovie, setClickedMovie] = useState<InterfaceShortResult | null>(null)
    const resultToTab = (list: Array<InterfaceShortResult>) => {
        return sortedList(list, sortBy).map((shortResult: InterfaceShortResult, index: number) => {
            return <Tab
                clicked={shortResult === clickedMovie}
                setClickedMovie={() =>  setClickedMovie(shortResult)}
                key={`${shortResult.imdbID}-${index}`}
                Title={shortResult.Title}
                Type={shortResult.Type}
                Year={shortResult.Year}
                imdbID={shortResult.imdbID}
                Poster={shortResult.Poster}
            />
        })
    }
    const searchList = useRef<any>(null);

    const onScroll = (e: any) => {
        if(loading){
            searchList.current.style.overflow = "hidden"
            searchList.current.style.paddingRight = "12px"
        }
            
        
        const scrollHeight = e.target.scrollHeight;
        const scrollTop = e.target.scrollTop;
        const clientHeight = e.target.clientHeight;
        // console.log(scrollTop)
        // console.log(scrollHeight)

        if (scrollHeight === scrollTop + clientHeight) {
            update(title, page + 1);
        }

    }

    
    
    useEffect(()=>{
        if(page === 1){
            searchList.current.scrollTo(0,0)
        }
    },[page])

    useEffect(()=>{
        if(!loading){
            searchList.current.style.overflow = "scroll"
            searchList.current.style.paddingRight = ""
        }else{
            searchList.current.scrollTop -= 10; 
            
        }
    },[loading])

    
    

    return (
        <SearchListBox
            onScroll={onScroll}
            ref={searchList}
        >
            {loading ? <Loadingoverlay
            position="sticky"
            height="100%"
            >
                <LoadingObject
                    src={"http://www.nyan.cat/cats/original.gif"}
                    width="50px"
                    height="50px"
                />
            </Loadingoverlay> : null}
            {resultToTab(list)}
        </SearchListBox>
    )
}

interface InterfaceTabProps extends InterfaceShortResult {
    clicked: boolean,
    setClickedMovie: () => void,
    
}

function Tab({ Title, Year, imdbID, Poster, clicked,setClickedMovie }: InterfaceTabProps) {

    return (
        <DetailContext.Consumer>
            {
                value => (
                    <SearchTab
                        background={clicked ? "rgba(162,162,162,0.22)" : "none"}
                        onClick={() => {
                            if(value.loading){
                                return;
                            }
                            setClickedMovie();
                            value.getMovieDetail(imdbID);
                            
                        }}>
                        <Thumbnail src={Poster}></Thumbnail>
                        <ShortBox>
                            <h3 style={{ "height": "50%" }} title={Title}>{Title}</h3>
                            {Year}
                        </ShortBox>
                    </SearchTab>
                )
            }

        </DetailContext.Consumer>
    )
}


