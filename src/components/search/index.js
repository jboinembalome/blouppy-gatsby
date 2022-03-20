import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, Fragment, useState, useEffect, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import CustomSearchBox from "./search-box"
import SearchResult from "./search-result"
import { Dialog, Transition } from '@headlessui/react'

export default function Search({ indices, openModal, modalClosed }) {
    const rootRef = createRef()
    const [query, setQuery] = useState()

    const searchClient = useMemo(
        () =>
            algoliasearch(
                process.env.GATSBY_ALGOLIA_APP_ID,
                process.env.GATSBY_ALGOLIA_SEARCH_KEY
            ),
        []
    )

    return (
        <div ref={rootRef}>
            <InstantSearch searchClient={searchClient}
                indexName={indices[0].name}
                onSearchStateChange={({ query }) => setQuery(query)}>
                <div className="relative">
                    <Transition.Root show={openModal} as={Fragment} afterLeave={() => modalClosed(false)}>
                        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" onClose={modalClosed}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
                                    <CustomSearchBox className="dark:bg-gray-700 dark:text-gray-100 relative" />
                                    <SearchResult className="dark:bg-gray-700 dark:text-gray-100 p-4 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                                        indices={indices} query={query}
                                    />

                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>
                </div>
            </InstantSearch>
        </div>
    )
}