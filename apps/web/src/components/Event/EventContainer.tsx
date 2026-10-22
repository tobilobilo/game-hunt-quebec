import { useTranslation } from "react-i18next";
import "./Event.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../contexts/data/useData";
import Event from "./Event";
import { Event as EventType } from "../../types/event";
import { DateTime } from "luxon";

const EventContainer = () => {
  const { t } = useTranslation();
  const { events } = useData();

  const today = DateTime.now().startOf("day");
  const futureEvents = events.filter(
    (event) => today <= DateTime.fromISO(event.date),
  );

  return (
    <div className="event-container">
      <h2>
        <i aria-hidden="true">
          <FontAwesomeIcon icon={faCalendarDays} />
        </i>{" "}
        {t("events.title", { count: events.length })}
      </h2>
      <div className="events">
        {futureEvents.length > 0 ? (
          futureEvents.map((event: EventType, index) => (
            <Event key={index} event={event} />
          ))
        ) : (
          <div className="summary mt-2">
            <p>{t("events.no_events")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
