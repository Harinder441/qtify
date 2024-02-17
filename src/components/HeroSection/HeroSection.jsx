import React from 'react'
import HeroImage from '../../assets/hero_headphones.png';
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={styles.HeroSectionContainer}>
      <div>
        <p className={styles.HeroSectionText}>100 Thousand Songs, ad-free</p>
        <p className={styles.HeroSectionText}>Over thousands podcast episodes</p>
      </div>
      <img src={HeroImage} alt="" />
    </div>
  )
}
