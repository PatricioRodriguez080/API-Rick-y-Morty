import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"

interface StarProps {
    filled: boolean
}

const StarIcon = ({ filled }: StarProps) => {
    return (
        <FontAwesomeIcon
            icon={filled ? faStarSolid : faStarRegular}
            className="text-yellow-400 cursor-pointer justify-items-start"
        />
    )
}

export default StarIcon