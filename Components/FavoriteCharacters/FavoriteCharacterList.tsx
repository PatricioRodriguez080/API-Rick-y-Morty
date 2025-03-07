import { Character } from "@/src/types/RickAndMortyTypes"
import FavoriteCharacterCard from "./FavoriteCharacterCard"

interface FavoriteCharacterListProps {
    favoriteCharacters: Character[]
}

const FavoriteCharacterList = ({ favoriteCharacters }: FavoriteCharacterListProps) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-center items-center place-items-center gap-4">
                {favoriteCharacters.map((character) => (
                    <FavoriteCharacterCard character={character} key={character.id} />
                ))}
            </div>
        </div>
    )
}

export default FavoriteCharacterList