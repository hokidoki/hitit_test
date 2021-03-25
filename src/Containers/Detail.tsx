import React from 'react'
import {
    InterfaceDetailWrapper,
    InterfaceMovieDetail
} from "../App"

import {
    DetailContainer, LoadingObject, LoadingOveray
} from '../styled/styled'
import recommendMovie from '../Components/Detail/Recommend'

import PosterSide from '../Components/Detail/Poster'
import DescriptionSide from '../Components/Detail/Description'
import ErrorDetailOveray from '../Components/Detail/Error'

export default function Detail({ loading, detail, error }: InterfaceDetailWrapper) {
    return (
        <DetailContainer>
            {error ? <ErrorDetailOveray error={error}/> : null}
            {loading ? 
                <LoadingOveray>
                    <LoadingObject 
                        src={"http://www.nyan.cat/cats/original.gif"}
                        width="100px"
                        height="100px"
                    />
                </LoadingOveray>
                 : null }
            {detail ? <MovieDetail {...detail}/> : null}
            {!detail && !loading && !error ? <MovieDetail {...recommendMovie}/> : null}
        </DetailContainer>
    )
}

function MovieDetail({Poster,Genre,Runtime,Title,Year,Plot,Director,Writer,Actors,imdbRating} : InterfaceMovieDetail) {
    return (
        <>
            <PosterSide Poster={Poster}
                Genre={Genre}
                Runtime={Runtime}
            />
            <DescriptionSide 
                imdbRating={imdbRating}
                Director={Director}
                Writer={Writer}
                Actors={Actors}
                Title={Title}
                Year={Year}
                Plot={Plot}
            />
        </>
    )
}