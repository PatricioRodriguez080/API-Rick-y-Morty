import { Character } from "@/src/types/RickAndMortyTypes"
import CharacterCard from "./CharacterCard"

interface CharacterListProps {
    characters: Character[] | null
}

const CharacterList = ({ characters }: CharacterListProps) => {
    return (
        <div>
            {characters?.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharacterList