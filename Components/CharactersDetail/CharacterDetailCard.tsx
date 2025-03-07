import { Character } from "@/src/types/RickAndMortyTypes"

interface CharacterDetailCardProps {
    character: Character
}

const CharacterDetailCard = ({ character }: CharacterDetailCardProps) => {
    console.log(character)
    return (
        <div className="flex flex-col items-center bg-gray-500 text-white rounded-lg mx-16 mt-8 p-16">
            <div className="flex items-center">
                <img src={character.image} className="w-48 h-full object-cover" alt={character.name} />
            </div>
            <div className="flex flex-col justify-center p-4">
                <h1 className="text-xl font-semibold text-center">{character.name}</h1>
                <h2 className="text-center">{character.species}</h2>
                <h3 className="text-center">{character.location.name}</h3>
                <h4 className="text-center">{character.created}</h4>
                <div className="flex flex-col items-center justify-center mt-2">
                    <h3>{character.status}</h3>
                    <div className={`rounded-full w-2 h-2 mt-1 ${character.status === "Alive" ? "bg-green-500" : "bg-red-500"}`}></div>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetailCard