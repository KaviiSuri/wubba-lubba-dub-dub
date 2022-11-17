import React from 'react'
import styles from './styles.module.css'


type SearchBoxProps  = {
  onChange?: (value: string) => void;
  value?: string;
}
const SearchBox = ({ onChange = () => {}, value = "" } : SearchBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target?.value)
  }

  return (
    <input value={value} onChange={handleChange} className={styles.searchBox} placeholder="Search..."/>
  )
}

export default SearchBox
