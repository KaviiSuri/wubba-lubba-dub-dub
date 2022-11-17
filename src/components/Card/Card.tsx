import { Character, CharacterStatus } from '../../services/rickAndMorty'
import styles from './styles.module.css'



const classForStatus: Record<CharacterStatus, string> = {
  Alive: styles.alive,
  Dead: styles.dead,
  Unknown: styles.unknown,
}
const CharacterStatusLabel = ({ status }: { status: CharacterStatus }) => {

  return <span className={`${styles.statusLabel} ${classForStatus[status]}`}> {status}</span>
}

const Card = ({ character }: { character: Character }) => {
  return (
    <div className={styles.cardsContainer}>
      <img src={character.image} />
      <div className={styles.desc}>
        <h3>{character.name}</h3>
        <p> <CharacterStatusLabel status={character.status} /> - {character.species}</p>
        <p><span className={styles.label}>First Seen At: </span> {character.origin.name}</p>
        <p><span className={styles.label}>Last Seen At: </span> {character.location.name}</p>
      </div>
    </div>
  )
}

export default Card
