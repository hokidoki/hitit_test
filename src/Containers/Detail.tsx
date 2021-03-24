import React from 'react'
import {
    InterfaceDetailWrapper,
    InterfaceMovieDetail
} from "../App"

import {
    DetailContainer, DetailObject, DetailOveray
} from '../styled/layout'

import PosterSide from '../Components/Detail/Poster'
import DescriptionSide from '../Components/Detail/Description'
import ErrorDetailOveray from '../Components/Detail/Error'

export default function Detail({ loading, detail, error }: InterfaceDetailWrapper) {
    return (
        <DetailContainer>
            {error ? <ErrorDetailOveray error={error}/> : null}
            {loading ? 
                <DetailOveray>
                    <DetailObject 
                        src={"http://www.nyan.cat/cats/original.gif"}
                        width="100px"
                        height="100px"
                    />
                </DetailOveray>
                 : null }
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