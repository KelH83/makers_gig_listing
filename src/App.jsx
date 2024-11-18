import Gig from "./components/Gig";
import "./App.css";

function App() {
  return (
    <>
      <Gig  
      name="Pantera" 
      src="https://i.scdn.co/image/ab67616100005174e21999c0102c240bdf094d9b"
      description = 'Experience the Power of Pantera Live! With crushing riffs, thunderous drums, and raw, commanding vocals, Pantera will ignite the crowd with classics like "Walk," "Cowboys from Hell," and "Domination."'
      dateTime = "Friday 22nd November - 19:00"
      location = "Newmarket Racecourse, Newmarket, Suffolk CB8 0TF"
      />
      <Gig  
      name="Korn" 
      src="https://m.media-amazon.com/images/M/MV5BMjE3MjQ4MTE3N15BMl5BanBnXkFtZTgwODM5NjIyMDI@._V1_FMjpg_UX1000_.jpg"
      description = "Get Ready to Feel the Raw Energy of Korn Live! Prepare for an explosive night of metal as Korn brings their signature nu-metal sound to the stage. With Jonathan Davis’s visceral vocals, thunderous basslines from Fieldy, and the heavy guitar riffs that have redefined an era, this is a concert you won’t forget."
      dateTime = "Saturday 23rd November - 20:00"
      location ="Cambridge Corn Exchange, Wheeler Street, Cambridge CB2 3QE"/>
    </>
  );
}

export default App;
