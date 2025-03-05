import FavoriteCharacterListContainer from "@/Components/FavoriteCharacters/FavoriteCharacterListContainer"
import { getFavoriteCharacters } from "@/src/services/FirebaseService"
import { Character } from "@/src/types/RickAndMortyTypes"


const FavoritosPage = async () => {
    const favoritesCharacters: Character[] = await getFavoriteCharacters()
    console.log(favoritesCharacters)

    return (
        <div>
            <FavoriteCharacterListContainer />
        </div>
    )
}

export default FavoritosPage