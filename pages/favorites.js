import { useState, useEffect } from "react";
import Link from "next/link";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = Object.values(localStorage).map((item) => JSON.parse(item));
        setFavorites(storedFavorites);
    }, []);

    return (
        <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "20px" }}>
            <h1>Favorite NASA Images</h1>
            {favorites.length === 0 ? <p>No favorites yet.</p> : favorites.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                    <img src={item.url} alt={item.title} width="50%" />
                </div>
            ))}
            <Link href="/">Back to Home</Link>
        </div>
    );
};

export default Favorites;
