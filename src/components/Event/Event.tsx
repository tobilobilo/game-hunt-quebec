import Button from "../ui/Button/Button";
import "./Event.scss";

const Event = () => {

  return (
    <div className="event">
      <img src="./images/events/001.png" alt="placeholder image" />
      <div className="event-infos">
        <time>18 mai 2024</time>
        <h3>Réunion du CCJVQ</h3>
        <p className="address">1001 Boulevard Crémazie E, Montréal, QC H2M 1M3, Canada</p>
        <p className="description">Comme à l'habitude, plusieurs tables de vente reliées aux jeux vidéo rétros et modernes, des tirages, et une excellente occasion de rencontrer d'autres passionnés.</p>
        <Button textKey="events.more_details" href="https://google.ca" external={true} size="btn-sm" />
      </div>
    </div>
  );
};

export default Event;
