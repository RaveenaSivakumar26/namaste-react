import RestaurantCard from "./RestaurantCard";
import resData from '../data/restaurant';

const Body = () => {
return(<div className="body">
    <div className="search">Search</div>
    <div className="restaurant-container">
        {resData.map((res) => (
            <RestaurantCard resData={res} key={res.id} />
        ))}
    </div>
</div>)
}

export default Body;