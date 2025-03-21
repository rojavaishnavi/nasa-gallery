import React from "react";
import styles from "../styles/Home.module.css";

const FilterDropdown = ({ selectedDate, setSelectedDate }) => {
    return (
        <select
            className={styles.filterDropdown}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
        >
            <option value="">Select Date</option>
            <option value="2023-03-20">March 20, 2023</option>
            <option value="2023-03-21">March 21, 2023</option>
            <option value="2023-03-22">March 22, 2023</option>
        </select>
    );
};

export default FilterDropdown;
