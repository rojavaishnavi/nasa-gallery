import React from "react";
import styles from "../styles/Home.module.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            type="text"
            className={styles.searchBar}
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};

export default SearchBar;
