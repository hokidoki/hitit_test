import React,{useState} from 'react';
import logo from './logo.svg';
import GlobalStyle from './styled/globalStyle';
import { AppContianer, 
  Header,
  MainContainer,
  DetailContainer
} from './styled/layout';

import SearchContainer from './Containers/Search';

export const DummyContext = React.createContext({
  title : "무적",
  getMovieDetailFetch : (imdbID : string) => {}
})

interface InterfaceMovieDetail{
  Title : string,
  Year : string,
  imdbRating : string,
  plot : string,
  Director : string,
  Writer : string,
  Actors : string,
  Genre : string,
  Runtime : string
}

function App() {

  const [detail, setDetail] = useState(null);

  const getMovieDetailFetch = async (imdbID : string) =>{
    const URL = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=ac2eb9f1`);
    const getJson = await URL.json();
    console.log(getJson)
  }

  return (
    <>
      <GlobalStyle />
      <AppContianer>
        <Header>OMDB Frontend</Header>
        <MainContainer>
          <DummyContext.Provider value={{
          title : "?",
          getMovieDetailFetch : getMovieDetailFetch
        }}>
          <SearchContainer />
          <DetailContainer>
            
          </DetailContainer>
          </DummyContext.Provider>
        </MainContainer>
      </AppContianer>
    </>
  );
}

export default App;
