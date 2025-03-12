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
        <form className="max-w-sm mx-auto">
            <label htmlFor="filters" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Filtrar por
            </label>
            <select
                id="filters"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-700 focus:border-gray-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-600 dark:focus:border-gray-600"
            >
                <option value="" disabled>
                    Choose an option
                </option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </form>
    )
}

export default FilterDropdown