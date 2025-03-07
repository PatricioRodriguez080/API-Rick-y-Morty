import { getCharacter } from "@/src/services/RickAndMortyService"

const characterPage = async ({ params }: { params: { characterId: string } }) => {
    const character = await getCharacter(params.characterId)

    return (
        <h1>{params.characterId}</h1>
    )
}

export default characterPage