import React from 'react';
import logo from './logo.svg';
import GlobalStyle from './styled/globalStyle';
import { AppContianer, 
  Header,
  MainContainer,
  DetailContainer
} from './styled/layout';

import SearchContainer from './Containers/Search';

function App() {

  return (
    <>
      <GlobalStyle />
      <AppContianer>
        <Header>OMDB Frontend</Header>
        <MainContainer>
          <SearchContainer />
          <DetailContainer>
            
          </DetailContainer>
        </MainContainer>
      </AppContianer>
    </>
  );
}

export default App;
