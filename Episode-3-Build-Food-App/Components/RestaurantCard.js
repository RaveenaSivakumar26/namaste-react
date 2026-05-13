const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId,sla} = resData;

    return (
    <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="restaurant-logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(',')}</h4>
        <h4>{avgRating} Stars</h4>
         <h4>{costForTwo}</h4>
        <h4>Delivery in {sla.deliveryTime} minutes</h4>

    </div>)
}

export default RestaurantCard;