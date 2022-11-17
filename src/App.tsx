import { useState } from 'react'
import styles from './App.module.css'
import CharacterList from './components/CharacterList/CharacterList';
import Header from './components/Header/Header'
import SearchBox from './components/SearchBox/SearchBox'
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { useSearchCharacters } from './hooks/useSearchCharacters';

function App() {
  const [searchQuery, setSearchQuery] = useState<string | undefined>();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } = useSearchCharacters(searchQuery)
  const observerElem = useIntersectionObserver(fetchNextPage, [fetchNextPage, hasNextPage])

  return (
    <div>
      <Header />
      <div className={styles.app}>
        <SearchBox onChange={(v) => setSearchQuery(v)} value={searchQuery} />
        {
          isLoading ? "Loading First Page.." :
            data?.pages.map((page) => <CharacterList response={page} />)
        }

        <div ref={observerElem}>
          {isFetchingNextPage && hasNextPage ? "Loading..." : "No Search Left"}
        </div>
      </div>
    </div>
  )
}

export default App
