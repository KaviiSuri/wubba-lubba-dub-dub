import React from 'react'
import { CharactersResponse } from '../../services/rickAndMorty'
import Card from '../Card/Card'
import styles from './styles.module.css'


type CharacterListProps = {
  response: CharactersResponse
}
const CharacterList = ({ response }: CharacterListProps) => {
  return (
    <div className={styles.resultsContainer}>
      {response.results.map(character => <Card character={character} key={character.id} />)}
      {/* <pre> */}
      {/*   {JSON.stringify(response.results.map(res => ({name: res.name, id: res.id})), null, 2)} */}
      {/* </pre> */}
    </div>
  )
}

export default CharacterList
