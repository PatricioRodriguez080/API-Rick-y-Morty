import { Character } from "../types/RickAndMortyTypes"

export const getCharacters = async (selectedFilter?: string): Promise<Character[] | null> => {
    try {
        let baseUrl = "https://rickandmortyapi.com/api/character"
        if (selectedFilter) {
            const statusOptions = ["Alive", "Dead", "unknown"]
            const genderOptions = ["Male", "Female", "Genderless", "unknown"]

            if (statusOptions.includes(selectedFilter)) {
                baseUrl += `?status=${selectedFilter}`
            } else if (genderOptions.includes(selectedFilter)) {
                baseUrl += `?gender=${selectedFilter}`
            }
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