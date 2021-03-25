import React from 'react'
import { DescriptionDetailDiv, 
    DescriptionSide, 
    NameTag, 
    MovieTitle,
    MovieRating,
    SubDescription } from '../../styled/styled'

interface InterfaceDescriptionProps {
    Title: string,
    Year: string,
    Plot: string,
    Director : string,
    Actors : string,
    Writer : string,
    imdbRating : string

}

export default function Description({ Title, Year, Plot,Director,Actors,Writer,imdbRating }: InterfaceDescriptionProps) {
    return (
        <DescriptionSide>
            <MovieRating background={ratingColor(Number(imdbRating))}>{imdbRating}</MovieRating>
            <MovieTitle>{Title}</MovieTitle>
            <div>
                <SubDescription>
                    {Year}
                </SubDescription>
            </div>
            <p style={{"margin" : "40px 0px"}}>{Plot}</p>
            <DescriptionDetailDiv>
                <NameTag>
                    Director:
                </NameTag>
                <span>{Director}</span>
            </DescriptionDetailDiv>
            <DescriptionDetailDiv>
                <NameTag>
                    Writer:
                </NameTag>
                <span>{Writer}</span>
            </DescriptionDetailDiv>
            <DescriptionDetailDiv>
                <NameTag>
                    Actors
                </NameTag>
                <span>{Actors}</span>
            </DescriptionDetailDiv>
                

        </DescriptionSide>
    )
}

const ratingColor : (rating : number) => string = (rating : number) => {
    //veryGood #509a47 r > 7.0
    //#9a8447 soso
    // #f16c6c bad
    if(rating > 7){
        return "#509a47"
    }else if(rating < 5){
        return "#f16c6c"
    }else{
        return "#9a8447"
    }
}