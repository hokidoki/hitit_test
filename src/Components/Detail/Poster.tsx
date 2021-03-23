import React from 'react'
import {
    PosterSide,
    MoviePoster,
    SubDescription
} from '../../styled/layout'

interface InterfacePosterSide {
    Poster: string,
    Genre : string,
    Runtime : string
}

export default function Poster({ Poster,Genre,Runtime }: InterfacePosterSide) {
    console.log(Poster)
    return (
        <PosterSide>
            <MoviePoster src={Poster}/>
            <SubDescription>{Genre}</SubDescription><br />
            <SubDescription>{Runtime}</SubDescription>
        </PosterSide>
    )
}
