import styled from 'styled-components';

export const AppContianer = styled.div`
    width : 60vw;
    height : 60vh;
    
    position : absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    display : flex;
    flex-direction : column;
`
export const Header = styled.h1`
    color : gray;
    height : 2.5rem;
`
export const MainContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    flex-grow : 1;
    justify-content : space-between;
`

export const SearchContainer = styled.div`
    display : flex;
    flex-direction : column;
    flex-basis : calc(30% - 7.5px);
    background : blue;
    color : white;
    padding : 10px 5px 0 15px;
    border-radius : 15px;
`

export const DetailContainer = styled.div`
    flex-basis : calc(70% - 7.5px);
    background : red;
    border-radius : 15px;
`

export const SearchBox = styled.div`
    display : flex;
    flex-direction : column;
    flex-basis : 50px;
`

export const Input = styled.input`
    width : calc(100% - 15px);
    border : 1px solid gray;
    padding : 5px;
    border-radius : 5px;
`