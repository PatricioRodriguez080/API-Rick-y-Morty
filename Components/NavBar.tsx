import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="bg-gray-900 text-white py-7 flex justify-evenly align-middle">
            <Link href={"/"} className="cursor-pointer hover:text-gray-200">
                Inicio
            </Link>
            <Link href={"/favoritos"} className="cursor-pointer hover:text-gray-200">
                Favoritos
            </Link>
        </nav>
    )
}

export default NavBar