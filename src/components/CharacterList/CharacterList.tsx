import React from 'react'
import { CharactersResponse } from '../../services/rickAndMorty'
import styles from './styles.module.css'


type CharacterListProps = {
  response: CharactersResponse
}
const CharacterList = ({ response }: CharacterListProps) => {
  return (
    <div className={styles.resultsContainer}>
      <h3>{response.info.count}</h3>
      <pre>
        {JSON.stringify(response.results.map(res => ({name: res.name, id: res.id})), null, 2)}
      </pre>
    </div>
  )
}

export default CharacterList
