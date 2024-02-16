import React from 'react'
import styles from './Navbar.module.css'
import Logo from "../Logo/Logo"
import Search from './Search'
import FeedbackButton from './FeedbackButton'
export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <Logo/>
        <Search/>
        <FeedbackButton/>
    </nav>
  )
}
