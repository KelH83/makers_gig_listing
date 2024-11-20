import Gig from "./components/Gig";
import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const URL = "https://makers-gig-backend.onrender.com/events";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setGigs(data));
  }, []);

  const toggleFavourite = (id) => {
    setGigs((prevGigs) =>
      prevGigs.map((gig) =>
        gig.event_id === id ? { ...gig, fav: !gig.fav } : gig
      )
    );
  };

  const sortedGigs = [...gigs].sort((a, b) => {
    if (b.fav && !a.fav) return 1;
    if (!b.fav && a.fav) return -1; 
    return 0;
  });
  
  return (
    <div>
      {sortedGigs.map((gig) => (
        <Gig
          key={gig.event_id}
          {...gig}
          toggleFavourite={() => toggleFavourite(gig.event_id)}
        />
      ))}
    </div>
  );
}

export default App;

