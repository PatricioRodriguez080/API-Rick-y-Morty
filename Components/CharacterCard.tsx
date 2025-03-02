import { Character } from "@/src/types/RickAndMortyTypes"

interface CharacterCardProps {
    character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <div className="flex m-4 p-4 bg-gray-500 text-white rounded-lg">
            <div>
                <img src={character.image} className="w-28 h-28 object-cover" alt={character.name} />
            </div>
            <div className="flex flex-col justify-center ml-4">
                <h1 className="text-xl font-semibold">{character.name}</h1>
                <div className="flex items-center mt-2">
                    <div className={`rounded-full w-2 h-2 ${character.status === "Alive" ? "bg-green-500" : "bg-red-500"}`}></div>
                    <h3 className="ml-2">{character.status}</h3>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard