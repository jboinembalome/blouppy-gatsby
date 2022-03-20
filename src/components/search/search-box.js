import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { SearchIcon } from '@heroicons/react/solid'

const SearchBox = ({ refine, currentRefinement, className }) => (
    <form className={className}>
        <SearchIcon
            className="pointer-events-none absolute top-3.5 left-4 h-5 w-5"
            aria-hidden="true"
        />
        <input
            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 placeholder-gray-400 focus:ring-0 sm:text-sm"
            type="text" placeholder="Search..." role="combobox" aria-expanded="false" aria-controls="options"
            autoComplete="off"
            onChange={e => refine(e.target.value)}
            value={currentRefinement}
           
        />
    </form>
)

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;