import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { Character } from "../types/RickAndMortyTypes";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const postFavoriteCharacter = async (character: Character) => {
    try {
        const characterRef = doc(db, "Favorites", character.id.toString())
        await setDoc(characterRef, character);
    } catch (error) {
        console.error("Error al guardar el personaje:", error);
    }
}