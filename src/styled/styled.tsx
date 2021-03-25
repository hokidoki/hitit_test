import styled from 'styled-components';

export const AppContianer = styled.div`
    width : 90vw;
    height : 80vh;
    position : absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    min-width : 500px;
    max-width : 1080px;
    min-height : 400px;
    display : flex;
    flex-direction : column;
`
export const Title = styled.h1`
    color : gray;
    font-style : italic;
    height : 2.5rem;
    margin-bottom : 5px;
    text-shadow: 1px 1px 0 #262626;
`
export const MainContainer = styled.div`
    display : flex;
    flex-direction : row;
    width : 100%;
    height : calc(80vh - 2.5rem);
    justify-content : space-between;
`

export const SearchContainer = styled.div`
    display : flex;
    max-height : 100%;
    flex-direction : column;
    flex-basis : calc(30% - 7.5px);
    color : gray;
    padding : 10px 5px 15px 15px;
    box-shadow: 1px 1px 10px 1px gray;
    border-radius : 15px;
    overflow-y : hidden;
`

interface InterfaceDetailObject{
    width : string,
    height : string,
}

export const LoadingObject = styled.img<InterfaceDetailObject>`
    width : ${props => props.width};
    height : ${props => props.height};
`

export const Loadingoverlay = styled.div`
display : flex;
flex-direction: column;
justify-contents : center;
position : fixed;
width : 100%;
height : 100%;
background : rgba(97,97,97,0.6);
top : 0px;
left : 0px;
border-radius : 15px;
justify-content: center;
align-items: center;
`;

export const DetailContainer = styled.div`
    display : flex;
    position : relative;
    padding : 10px;
    flex-basis : calc(70% - 7.5px);
    box-shadow: 0px 1px 10px 0px gray;
    background : white;
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
position : relative;
    flex-grow : 1;
    max-height : calc(100% - 50px);
    overflow-y : scroll;
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
interface InterfaceSearchTab {
    background: string
}

export const SearchTab = styled.div<InterfaceSearchTab>`
    display : flex;
    height : 60px;
    margin-bottom : 1px;
    background : ${props => props.background}
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

export const PosterSide = styled.div`
    flex-basis : 35%;
    max-width : 35%;
    height : 100%;
`

export const MoviePoster = styled.img`
    width : 100%;
    height : 60%;
`
export const SubDescription = styled.span`
    color : gray;
    margin-top : 5px;
`

export const DescriptionSide = styled.div`
    flex-basis : 65%;
    max-width : 65%;
    height : 100%;
    padding-left : 20px;
    overflow-y : scroll;
`

export const NameTag = styled.span`
    font-weight : 600;
`

export const DescriptionDetailDiv = styled.div`
    margin-bottom : 10px;
`

export const MovieTitle = styled.h1`
    width : calc(100% - 80px);
    margin : 10px 0px;
`

interface InterfaceMovieRatingProps{
    background : string
}

export const MovieRating = styled.div<InterfaceMovieRatingProps>`
    font-size : 2.0rem;
    line-height : 70px;
    text-align : center;
    color : white;
    position : absolute;
    width : 70px;
    height : 70px;
    right : 15px;
    top : 15px;
    border-radius : 70px;
    background : ${props => props.background};
`