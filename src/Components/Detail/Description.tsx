import React from 'react'
import { DescriptionDetailDiv, DescriptionSide, NameTag, SubDescription } from '../../styled/layout'

interface InterfaceDescriptionProps {
    Title: string,
    Year: string,
    Plot: string,
    Director : string,
    Actors : string,
    Writer : string,
}

export default function Description({ Title, Year, Plot,Director,Actors,Writer }: InterfaceDescriptionProps) {
    return (
        <DescriptionSide>
            <h1 style={{"margin" : "10px 0px"}}>{Title}</h1>
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
