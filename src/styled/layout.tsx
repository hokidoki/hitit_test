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
    color : gray;
    padding : 10px 5px 15px 15px;
    box-shadow: 1px 1px 10px 1px;
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

export const SearchListBox = styled.div`
    flex-grow : 1;
    max-height : 400px;
    overflow-y : scroll;
    padding : 10px 0px;
    &::-webkit-scrollbar{
        width : 10px
    }
    &::-webkit-scrollbar-thumb{
        background-color: #2f3542;
        border-radius: 10px;
        background-clip: padding-box;
        border: 2px solid transparent;
    }
`

export const SearchTab = styled.div`
    display : flex;
    height : 60px;
    margin-bottom : 1px;
`

export const Thumbnail = styled.img`
    width : 35px;
    height : 100%;
    object-fit : contain;
`

export const ShortBox = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-evenly;
    width : calc(100% - 35px);
    max-width : 181.5px;
    padding-left : 5px;
`
export const ErrorMessage = styled.label`
    display : block;
    height : 1.5rem;
    color : red;
    line-height : 1.5rem;
`
export const Select = styled.select`
    border : none;
`