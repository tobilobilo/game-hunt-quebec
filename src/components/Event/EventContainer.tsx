import { useTranslation } from "react-i18next";
import "./Event.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../../contexts/DataContext";
import Event from "./Event";
import { Event as EventType } from "../../types/event";

const EventContainer = () => {
  const { t } = useTranslation();
  const { events } = useData();

  return (
    <div className="event-container">
      <h2>
        <i aria-hidden="true"><FontAwesomeIcon icon={faCalendarDays} /></i> {t("events.title", {count: events.length})}
      </h2>
      <div className="events">
          {events && events.length > 0 ? (
            events.map((event: EventType, index) => (
              <Event key={index} event={event} />
            ))
          ) : (
            <div className="summary mt-2"><p>{t("events.no_events")}</p></div>
          )}
      </div>
    </div>
  );
};

export default EventContainer;
