import React, { useState } from 'react';
import logo from './logo.svg';
import GlobalStyle from './styled/globalStyle';
import {
  AppContianer,
  Header,
  MainContainer,
} from './styled/layout';

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

  const [detailWrapper, setDetailWrapper] = useState<InterfaceDetailWrapper>({
    loading: false,
    detail: null,
    error: null
  });

  const getMovieDetailFetch = async (imdbID: string) => {
    setDetailWrapper(Object.assign({},detailWrapper,{loading : true, error : null}))
    const URL = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=ac2eb9f1`);
    const getJson = await URL.json();

    return getJson;
  }

  const getMovieDetail = async (imdbID: string) => {
    const movieDetail: InterfaceMovieDetail = await getMovieDetailFetch(imdbID);
    const detailWrapper: InterfaceDetailWrapper = { loading: false, detail: movieDetail, error: null }
    console.log(movieDetail)
    setDetailWrapper(detailWrapper);
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
