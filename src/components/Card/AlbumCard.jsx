import React from "react";
import styles from "./Card.module.css";
import LogoImage from "../../assets/logo.png";
export default function AlbumCard({ image, category, buttonText }) {
  return (
    <div className={styles.AlbumCardContainer}>
      <div className={styles.AlbumCard}>
        <div className={styles.AlbumCardImage}>
          <img src={image} alt="" />
        </div>
        <div className={styles.AlbumCardBottom}>
          <button className={styles.AlbumCardButton}>{buttonText}</button>
        </div>
      </div>
      <p className={styles.AlbumCardCategory}>{category}</p>
    </div>
  );
}
