import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const Details = () => {
    const router = useRouter();
    const { date } = router.query;
    const [imageDetails, setImageDetails] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (date) {
            axios
                .get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
                .then((response) => {
                    setImageDetails(response.data);
                    setIsFavorite(localStorage.getItem(date) !== null);
                })
                .catch((error) => console.error("Error fetching details:", error));
        }
    }, [date]);

    const handleFavorite = () => {
        if (isFavorite) {
            localStorage.removeItem(date);
        } else {
            localStorage.setItem(date, JSON.stringify(imageDetails));
        }
        setIsFavorite(!isFavorite);
    };

    if (!imageDetails) return <p>Loading...</p>;

    return (
        <div style={styles.container}>
            <h1>{imageDetails.title}</h1>
            <p>{imageDetails.date}</p>

            {imageDetails.media_type === "image" ? (
                <img src={imageDetails.hdurl} alt={imageDetails.title} width="80%" />
            ) : (
                <iframe width="80%" height="400" src={imageDetails.url} title={imageDetails.title} allowFullScreen></iframe>
            )}

            <p>{imageDetails.explanation}</p>
            {imageDetails.copyright && <p><strong>Copyright:</strong> {imageDetails.copyright}</p>}

            <button onClick={handleFavorite} style={styles.favoriteButton}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

const styles = {
    container: { backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "20px", textAlign: "center" },
    favoriteButton: { padding: "10px 15px", background: "#ff9800", color: "#fff", border: "none", cursor: "pointer" },
};

export default Details;
