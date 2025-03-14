import { Character } from "../types/RickAndMortyTypes"


export const getCharacters = async (selectedFilter?: string): Promise<Character[] | null> => {
    try {
        let baseUrl = "https://rickandmortyapi.com/api/character"
        if (selectedFilter) {
            baseUrl += `?status=${selectedFilter}`
        }
        const response = await fetch(baseUrl)
        const data = await response.json()
        return data.results

    } catch (error) {
        console.error("Error en getCharacters:", error)
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