import React from 'react'
import {
    InterfaceDetailWrapper,
    InterfaceMovieDetail
} from "../App"

import {
    DetailContainer, LoadingOveray,
} from '../styled/layout'

import PosterSide from '../Components/Detail/Poster'
import DescriptionSide from '../Components/Detail/Description'
export default function Detail({ loading, detail, error }: InterfaceDetailWrapper) {

    return (
        <DetailContainer>
            {loading ? <LoadingOveray top="0px" /> : null }
            {detail ? <MovieDetail {...detail}/> : null}
        </DetailContainer>
    )
}

function MovieDetail({Poster,Genre,Runtime,Title,Year,Plot,Director,Writer,Actors} : InterfaceMovieDetail) {
    return (
        <>
            <PosterSide Poster={Poster}
                Genre={Genre}
                Runtime={Runtime}
            />
            <DescriptionSide 
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