const Card = ({trip}) => {
    return (
        <section className="card">
            <div className="card--img-container">
                <img src={trip.img} alt={trip.alt} 
                    className="card--img"/>
            </div>
            <div className="card--content">
                <div className="card--header">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h2>{trip.country}</h2>
                    </div>
                    <a href={trip.maps} target="_blank">View on Google Maps</a>
                </div>
                <h3>{trip.city}</h3>
                <h4>{trip.dates}</h4>
                <p>{trip.description}</p>
            </div>
        </section>
    )
}

export default Card;