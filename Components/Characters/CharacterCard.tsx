"use client"
import { useState, useEffect } from "react"
import { Character } from "@/src/types/RickAndMortyTypes"
import StarIcon from "./StarIcon"
import { getFavoriteCharacters, postFavoriteCharacter, removeFavoriteCharacter } from "@/src/services/FirebaseService"
import Link from "next/link"

interface CharacterCardProps {
    character: Character
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    useEffect(() => {
        const fetchFavorites = async () => {
            const favorites: Character[] = await getFavoriteCharacters()
            const isAlreadyFavorite: boolean = favorites.some(fav => fav.id === character.id)
            setIsFavorite(isAlreadyFavorite)
        }

        fetchFavorites()
    }, [character.id])

    const handleFavoriteButton = () => {
        if (isFavorite) {
            removeFavoriteCharacter(character.id)
        } else {
            postFavoriteCharacter(character)
        }
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="flex m-4 bg-gray-500 rounded-lg w-full h-56">
            <div className="flex items-center">
                <img src={character.image} className="w-48 h-full object-cover rounded-l-lg" alt={character.name} />
            </div>
            <div className="flex flex-col justify-center ml-4 p-4">
                <Link href={`/characters/${character.id}`}>
                    <h1 className="text-xl font-semibold text-white hover:text-gray-300 transform hover:scale-105 transition-all duration-200">{character.name}</h1>
                </Link>
                <div className="flex items-center mt-2">
                    <div className={`rounded-full w-2 h-2 ${character.status === "Alive" ? "bg-green-500" : "bg-red-500"}`}></div>
                    <h3 className="ml-2 text-white">{character.status}</h3>
                </div>
                <button onClick={handleFavoriteButton} className="flex justify-items-start">
                    <StarIcon filled={isFavorite} />
                </button>
            </div>
        </div>
    )
}

export default CharacterCard