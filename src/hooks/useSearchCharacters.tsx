import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react'
import { useDebounce } from 'use-debounce';
import { fetchCharacters } from '../services/rickAndMorty';


export const useSearchCharacters = (searchQuery?: string) => {
  const debouncedSearchQuery = useDebounce<string | undefined>(searchQuery, 200)
  const query = useInfiniteQuery(
    ["characters", debouncedSearchQuery],
    ({ pageParam, signal }) => fetchCharacters({ page: pageParam, searchQuery: debouncedSearchQuery[0], signal }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.info.next === null) {
          return false
        }
        const nextPage = allPages.length + 1
        return nextPage
      },
      retry: 2,
    })

  useEffect(() => {
    if (searchQuery) {
      query.refetch()
    }
  }, [searchQuery])
  return query;
}

