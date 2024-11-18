import "./Gig.css"
const Gig = (props) => {
    return <>
    <h1 className="band-name">{props.name}</h1>
    <img className="band-image"src={props.src}/>
    <p className="event-description">{props.description}</p>
    <p className="date-time">{props.dateTime}</p>
    <p className="location">{props.location}</p>
    </>
};

export default Gig;