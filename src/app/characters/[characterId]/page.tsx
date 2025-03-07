import CharacterDetailCard from "@/Components/CharactersDetail/CharacterDetailCard"
import { getCharacter } from "@/src/services/RickAndMortyService"

const characterPage = async ({ params }: { params: { characterId: string } }) => {
    const character = await getCharacter(params.characterId)

    return (
        <CharacterDetailCard character={character!} />
    )
}

export default characterPage