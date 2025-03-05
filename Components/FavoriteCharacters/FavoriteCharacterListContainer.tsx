import { getFavoriteCharacters } from "@/src/services/FirebaseService"
import { Character } from "@/src/types/RickAndMortyTypes"
import FavoriteCharacterList from "./FavoriteCharacterList"

const FavoriteCharacterListContainer = async () => {
    const favoriteCharacters: Character[] = await getFavoriteCharacters()

    return (
        <div className="p-16">
            <FavoriteCharacterList favoriteCharacters={favoriteCharacters} />
        </div>
    )
}

export default FavoriteCharacterListContainer