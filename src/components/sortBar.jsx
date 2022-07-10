import React from "react";
import './styles/sortBar.css';

export default function SortBar() {
    return (
        <div className="sortBar">
            <div className="path">Home / Calendars</div>
            <div className="categoryName">Calendars</div>
            <div className="filters">
                <button className="filterBtn">FILTER</button>
                <div className="filterResults">Showing all 3 results</div>
                <select name="sorting" id="sort">
                    <option value="Default">Default sorting</option>
                    <option value="Default">Sort by popularity</option>
                    <option value="Default">Sort by average rating</option>
                    <option value="Default">Sort by latest</option>
                    <option value="Default">Sort by price: low to high</option>
                    <option value="Default">Sort by price: high to low</option>
                </select>
            </div>
        </div>
    )
}