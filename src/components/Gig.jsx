import "./Gig.css"
import {useState} from "react";
const Gig = (props) => {
    const [fav, setFav] = useState(false)

    const favourite = () =>{
        setFav(!fav)
    }

    return <>
    <h1 className="band-name">{props.name}</h1>
    <img className="band-image"src={props.src} alt="image of band"/>
    <p className="event-description">{props.description}</p>
    <p className="date-time">{props.dateTime}</p>
    <p className="location">{props.location}</p>
    <button className="fav-button" onClick={favourite}><img className="favourite" src={fav ? "src/assets/full_star.png" : "src/assets/star.png"}/></button>
    <hr/>
    </>
};

export default Gig;