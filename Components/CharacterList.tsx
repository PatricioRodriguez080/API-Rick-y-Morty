import { Character } from "@/src/types/RickAndMortyTypes"
import CharacterCard from "./CharacterCard"

interface CharacterListProps {
    characters: Character[] | null
}

const CharacterList = ({ characters }: CharacterListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-center items-center place-items-center gap-4">
            {characters?.map((character) => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default CharacterList