import RestaurantCard from "./RestaurantCard";
import restaurantData from '../data/restaurant';

const Body = () => {
return(<div className="body">
    <div className="search">Search</div>
    <div className="restaurant-container">
        <RestaurantCard  resData={restaurantData} />
    </div>
</div>)
}

export default Body;