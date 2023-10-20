import vienna from '../assets/stephans-cathedral.png';

const Card = () => {
    return (
        <section className="card">
            <div className="card--img-container">
                <img src={vienna} alt="St.Stephen's Cathedral" 
                    className="card--img"/>
            </div>
            <div className="card--content">
                <div className="card--header">
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h2>Austria</h2>
                    </div>
                    <a href="#" target="_blank">View on Google Maps</a>
                </div>
                <h3>Vienna</h3>
                <h4>2nd - 3rd August 2023</h4>
                <p>Baroque street-scapes and imperial palaces set the stage 
                    for Vienna's artistic and musical masterpieces alongside 
                    its coffee-house culture and vibrant epicurean and design scenes.
                </p>
            </div>

        </section>
    )
}

export default Card;