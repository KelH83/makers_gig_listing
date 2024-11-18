import "./Gig.css"
const Gig = (props) => {
    return <>
    <h1 className="band-name">Pantera</h1>
    <img className="band-image"src="https://i.scdn.co/image/ab67616100005174e21999c0102c240bdf094d9b"/>
    <p className="event-description"><span className="headline">Experience the Power of Pantera Live!</span><br/><br/>
        Prepare for an electrifying night as Pantera takes the stage, delivering their signature blend of groove metal and unrelenting energy. With crushing riffs, thunderous drums, and raw, commanding vocals, Pantera will ignite the crowd with classics like "Walk," "Cowboys from Hell," and "Domination." Get ready for a relentless, high-octane performance that proves why they remain one of metal's most legendary bands. Don’t miss the chance to witness this unforgettable gig—pure adrenaline awaits!</p>
    <p className="date-time">Friday 22nd November - 19:00</p>
    <p className="location">Cambridge Corn Exchange, Wheeler Street, Cambridge CB2 3QE</p>
    </>
};

export default Gig;