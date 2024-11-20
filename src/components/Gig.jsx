import "./Gig.css";

const Gig = (props) => {
const { band_name, imageURL, description, time, location, fav, toggleFavourite } = props;

const date = new Date(time);

const formatter = new Intl.DateTimeFormat('en-GB', {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric',
hour: '2-digit',
minute: '2-digit',
timeZone: 'UTC',
timeZoneName: 'short'
});

const formattedDate = formatter.format(date)

return (
    <>
    <div className={fav ? "band-container-fav" : "band-container"}>
    <h1 className="band-name">{band_name}</h1>
    <img className="band-img" src={imageURL}/>
    <p className="event-description">{description}</p>
    <p className="date-time">{formattedDate}</p>
    <p className="location">{location}</p>
    <p>{fav ? "UnFavourite" : "Favourite"}</p>
    <button className="fav-button" onClick={toggleFavourite}>
    <img
        className="favourite"
        src={fav ? "src/assets/full_star.png" : "src/assets/star.png"}
        alt={"image of band"}
        />
    </button>
    <hr />
    </div>
    </>
);
};

export default Gig;
