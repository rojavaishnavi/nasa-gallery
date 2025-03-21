import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

export const fetchImages = async (searchQuery) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                count: 10,  // Fetch 10 random images
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
