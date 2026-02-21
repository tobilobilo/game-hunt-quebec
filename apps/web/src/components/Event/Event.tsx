import { DateTime } from "luxon";
import { Event as EventType } from "../../types/event";
import Button from "../ui/Button/Button";
import "./Event.scss";
import { useTranslation } from "react-i18next";
import { basename } from "../../utils/path";

const Event = ({ event }: { event: EventType }) => {
  const { i18n } = useTranslation();

  const formatedDate = DateTime.fromISO(event.date).setLocale(i18n.language).toLocaleString(DateTime.DATE_FULL);

  return (
    <div className="event">
      <img src={basename().concat('/images/events/', event.image)} alt={event.name.fr} />
      <div className="event-infos">
        <time>{formatedDate}</time>
        <h3>{event.name.fr}</h3>
        <p className="address">{event.address.street}, {event.address.city}, {event.address.region}</p>
        <p className="description">{event.description.fr}</p>
        <Button textKey="events.more_details" href={event.website} external={true} size="btn-sm" />
      </div>
    </div>
  );
};

export default Event;
