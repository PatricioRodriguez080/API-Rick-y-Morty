"use client"
import CharacterListContainer from "@/Components/Characters/CharacterListContainer"
import FilterDropdown from "@/Components/FilterDropdown"
import { useState } from "react"

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

  return (
    <div>
      <FilterDropdown setSelectedValue={setSelectedValue} />
      <CharacterListContainer selectedValue={selectedValue} />
    </div>
  )
}
