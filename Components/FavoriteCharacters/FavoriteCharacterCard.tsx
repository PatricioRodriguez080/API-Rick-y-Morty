import { Character } from "@/src/types/RickAndMortyTypes"
import Link from "next/link"

interface FavoriteCharacterCardProps {
    character: Character
}

const FavoriteCharacterCard = ({ character }: FavoriteCharacterCardProps) => {
    return (
        <div className="flex m-4 bg-gray-500 text-white rounded-lg w-full h-56">
            <div className="flex items-center">
                <img src={character.image} className="w-48 h-full object-cover rounded-l-lg" alt={character.name} />
            </div>
            <div className="flex flex-col justify-center ml-4 p-4">
                <Link href={`/characters/${character.id}`}>
                    <h1 className="text-xl font-semibold text-white hover:text-gray-300 transform hover:scale-105 transition-all duration-200">{character.name}</h1>
                </Link>
                <div className="flex items-center mt-2">
                    <div className={`rounded-full w-2 h-2 ${character.status === "Alive" ? "bg-green-500" : "bg-red-500"}`}></div>
                    <h3 className="ml-2">{character.status}</h3>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCharacterCard