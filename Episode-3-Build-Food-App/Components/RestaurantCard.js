const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData;

    return (
    <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src="https://i.pinimg.com/originals/c5/d2/62/c5d262f3377da91a7229772026a2ec5c.jpg" alt="restaurant-logo" />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{avgRating} Stars</h4>
         <h4>{costForTwo}</h4>
        <h4>Delivery in {deliveryTime} minutes</h4>

    </div>)
}

export default RestaurantCard;