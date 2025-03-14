"use client"
import { useEffect, useState } from "react"
import { getCharacters } from "@/src/services/RickAndMortyService"
import { Character } from "@/src/types/RickAndMortyTypes"
import CharacterList from "./CharacterList"

interface CharacterListContainerProps {
    selectedValue?: string
}

const CharacterListContainer = ({ selectedValue }: CharacterListContainerProps) => {
    const [characters, setCharacters] = useState<Character[] | null>(null)
    const [loadig, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCharacters = async () => {
            const fetchedCharacters = await getCharacters(selectedValue)
            setCharacters(fetchedCharacters)
            setLoading(false)
        }
        fetchCharacters()
    }, [selectedValue])

    return (
        <div className="p-16">
            {loadig ? <h1>cargando Personajes</h1> : <CharacterList characters={characters} />}
        </div>
    )
}

export default CharacterListContainer