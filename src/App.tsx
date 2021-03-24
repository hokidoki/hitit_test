import React, { useState,useEffect } from 'react';
import GlobalStyle from './styled/globalStyle';
import {
  AppContianer,
  Header,
  MainContainer,
} from './styled/layout';
import { InterfaceShortResult } from "./Containers/Search";

import DetailContainer from './Containers/Detail'
import SearchContainer from './Containers/Search';


export const DetailContext = React.createContext({
  getMovieDetail: (imdbID: string) => { },
})

export interface InterfaceDetailWrapper {
  loading: boolean,
  detail: InterfaceMovieDetail | null,
  error: string | null
}

export interface InterfaceMovieDetail {
  Title: string,
  Year: string,
  imdbRating: string,
  Plot: string,
  Director: string,
  Writer: string,
  Actors: string,
  Genre: string,
  Runtime: string,
  Poster : string
}

function App() {

  const [whatIsaw,setWhatIsaw] = useState<InterfaceShortResult[]>([]);
  const [detailWrapper, setDetailWrapper] = useState<InterfaceDetailWrapper>({
    loading: false,
    detail: null,
    error: null
  });

  useEffect(() => {
    // Todo : ShourtResult를 클릭하면, whatIsaw를 update해야 한다.
    // Todo : mystorage 또한 update한다. 
    // Todo : 상단은 영화 포스터 
    
    const myStorage = window.localStorage;
    const whatIsaw = myStorage.getItem("whatIsaw");
    
    if(!whatIsaw){
      const defaultMovie ={
        Poster: "https://m.media-amazon.com/images/M/MV5BMjlmOWRhYmUtYmYxYi00Mzg0LTllOTYtNTE0MDEyNzQzODA0XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
        Title: "Hello Greetings",
        Type: "movie",
        Year: "2005",
        imdbID: "tt0456165",
      }
      const initializeArray = [defaultMovie];
      myStorage.setItem("whatIsaw",JSON.stringify(initializeArray));
      setWhatIsaw(initializeArray);
    }else{
      setWhatIsaw(JSON.parse(whatIsaw));
    }
  }, [])

  const getMovieDetailFetch = async (imdbID: string) => {
    setDetailWrapper(Object.assign({},detailWrapper,{loading : true, error : null}))
    const URL = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=ac2eb9f1`);
    const getJson = await URL.json();

    const detailResult = {
      loading : false,
      detail : getJson.Response === "True" ? getJson : null,
      error : getJson.Response === "True" ? null : "Get data fail... sorry"
    }

    return detailResult;
  }

  const getMovieDetail = async (imdbID: string) => {
    const response : InterfaceDetailWrapper = await getMovieDetailFetch(imdbID);
    setDetailWrapper(response);
  }

  return (
    <>
      <GlobalStyle />
      <AppContianer>
        <Header>OMDB Frontend</Header>
        <MainContainer>
          <DetailContext.Provider value={{
            getMovieDetail: getMovieDetail,
          }}>
            <SearchContainer />
          </DetailContext.Provider>
          <DetailContainer {...detailWrapper} />
        </MainContainer>
      </AppContianer>
    </>
  );
}

export default App;
