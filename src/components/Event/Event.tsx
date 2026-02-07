import { Event as EventType } from "../../types/event";
import Button from "../ui/Button/Button";
import "./Event.scss";

const Event = ({ event }: { event: EventType }) => {

  return (
    <div className="event">
      <img src={event.image} alt={event.name.fr} />
      <div className="event-infos">
        <time>{event.date}</time>
        <h3>{event.name.fr}</h3>
        <p className="address">{event.address.street}, {event.address.city}, {event.address.region}</p>
        <p className="description">{event.description.fr}</p>
        <Button textKey="events.more_details" href={event.website} external={true} size="btn-sm" />
      </div>
    </div>
  );
};

export default Event;
