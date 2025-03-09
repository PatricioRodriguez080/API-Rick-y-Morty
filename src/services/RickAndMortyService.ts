import { Character } from "../types/RickAndMortyTypes"

export const getCharacters = async (): Promise<Character[] | null> => {
    try {
        const urls = [
            "https://rickandmortyapi.com/api/character?page=1",
            "https://rickandmortyapi.com/api/character?page=2"
        ]

        const responses = await Promise.all(urls.map(url => fetch(url)))
        const data = await Promise.all(responses.map(res => res.json()))

        return data.flatMap(d => d.results)
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getCharacter = async (characterId: string): Promise<Character | null> => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}