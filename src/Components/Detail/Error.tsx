import React from 'react'
import { Loadingoverlay, LoadingObject } from '../../styled/styled'

interface InterfaceErrorProps{
    error : string | null
}


export default function Error({error} : InterfaceErrorProps) {
    return (
        <Loadingoverlay position="absolute">
            <LoadingObject
                width={"30%"}
                height={"30%"}
                src="https://media.tenor.com/images/38214c8226ff6bb0988c1450b498a0ea/tenor.gif"
            />
            <h2 style={{"color" : "red", "textAlign" : "center"}}>{error}</h2>
        </Loadingoverlay>
    )
}
