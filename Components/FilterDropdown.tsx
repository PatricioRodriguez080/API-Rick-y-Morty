import React from "react"

interface FilterDropdownProps {
    setSelectedValue: (value: string) => void
}

const FilterDropdown = ({ setSelectedValue }: FilterDropdownProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setSelectedValue(value)
    }

    return (
        <form className="max-w-sm mx-auto mt-8">
            <label htmlFor="filters" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Filtrar por
            </label>
            <select
                id="filters"
                onChange={handleChange}
                className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
            >
                <option value="" disabled>
                    Choose an option
                </option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </form>
    )
}

export default FilterDropdown