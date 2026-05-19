import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from '../utils/data/restaurant';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

    const handleClick = () => {
       const filteredList= listOfRestaurants.filter((res) => res.avgRating > 4.4);
        setListOfRestaurants(filteredList)
        console.log("listOfRestaurants", filteredList)
    }

    return (<div className="body">
        <div className="filter">
            <button
                className="filter-btn"
                onClick={() => handleClick()}
            // onMouseOver={() => { console.log("hovering") }}
            >
                Top Rated Restaurants
            </button>
        </div>

        <div className="restaurant-container">
            {listOfRestaurants.map((res) => (
                <RestaurantCard resData={res} key={res.id} />
            ))}
        </div>
    </div>)
}

export default Body;