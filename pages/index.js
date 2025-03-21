import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const Home = () => {
    const [images, setImages] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [mediaType, setMediaType] = useState("all");

    const fetchRandomImages = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}&count=10`);
            setImages(response.data);
            setFilteredImages(response.data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchRandomImages();
    }, []);

    useEffect(() => {
        const filtered = images.filter((item) => {
            const matchesTitle = item.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesDate = item.date.includes(searchTerm);
            const matchesMediaType = mediaType === "all" || item.media_type === mediaType;
            return (matchesTitle || matchesDate) && matchesMediaType;
        });

        setFilteredImages(filtered);
    }, [searchTerm, mediaType, images]);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>NASA GALLERY</h1>

            <div style={styles.filterContainer}>
                <input
                    type="text"
                    placeholder="Search by Title or Date (YYYY-MM-DD)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.input}
                />
                <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} style={styles.select}>
                    <option value="all">All</option>
                    <option value="image">Images</option>
                    <option value="video">Videos</option>
                </select>
                <Link href="/favorites">
                    <button style={styles.favoriteButton}>View Favorites</button>
                </Link>
            </div>

            <div style={styles.grid}>
                {filteredImages.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3>{item.title}</h3>
                        <p>{item.date}</p>

                        {item.media_type === "image" ? (
                            <img src={item.url} alt={item.title} width="100%" loading="lazy" style={styles.image} />
                        ) : (
                            <iframe width="100%" height="200" src={item.url} title={item.title} allowFullScreen></iframe>
                        )}

                        <Link href={`/details?date=${item.date}`}>
                            <button style={styles.button}>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "20px" },
    title: { textAlign: "center", fontSize: "2.5rem", fontFamily: "Orbitron, sans-serif", color: "#ff9800" },
    filterContainer: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
    input: { padding: "10px", width: "250px", borderRadius: "5px", border: "1px solid #ccc", background: "#333", color: "#fff" },
    select: { padding: "10px", borderRadius: "5px", background: "#333", color: "#fff" },
    favoriteButton: { padding: "10px 15px", background: "#ff9800", color: "#fff", border: "none", cursor: "pointer" },
    grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" },
    card: { backgroundColor: "#222", padding: "15px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(255, 152, 0, 0.3)" },
    image: { borderRadius: "8px" },
    button: { marginTop: "10px", padding: "10px", background: "#ff9800", color: "#fff", border: "none", cursor: "pointer" },
};

export default Home;
