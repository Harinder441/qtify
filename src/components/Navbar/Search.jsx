import React from 'react'
import styles from './Navbar.module.css'
import SearchIcon from "../../assets/search-icon.svg"
export default function Search() {
  return (
    <div className={styles.SearchContainer}> 
        <input type="text" placeholder="Search album of your choice" className={styles.Search} />
        <img src={SearchIcon} alt="Search Icon" className={styles.SearchIcon} />
    </div>
  )
}
