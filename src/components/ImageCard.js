import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../styles/Home.module.css";

const ImageCard = ({ item }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavorite(storedFavorites.some(fav => fav.url === item.url));
    }, [item]);

    const toggleFavorite = () => {
        let storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {
            storedFavorites = storedFavorites.filter(fav => fav.url !== item.url);
        } else {
            storedFavorites.push(item);
        }

        localStorage.setItem("favorites", JSON.stringify(storedFavorites));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <LazyLoadImage src={item.url} alt={item.title} effect="blur" className={styles.image} />
            <h3>{item.title}</h3>
            <button className={styles.favoriteButton} onClick={toggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

export default ImageCard;
