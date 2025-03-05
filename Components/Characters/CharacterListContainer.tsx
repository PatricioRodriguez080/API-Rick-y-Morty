import { getCharacters } from "@/src/services/RickAndMortyService"
import { Character } from "@/src/types/RickAndMortyTypes"
import CharacterList from "./CharacterList"

const CharacterListContainer = async () => {
    const characters: Character[] | null = await getCharacters()

    return (
        <div className="p-16">
            <CharacterList characters={characters} />
        </div>
    )
}

export default CharacterListContainer