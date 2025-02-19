import { useTranslation } from "react-i18next";
import "./Event.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Event from "./Event";

const EventContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="event-container">
      <h2>
        <i aria-hidden="true"><FontAwesomeIcon icon={faCalendarDays} /></i> {t("events.title", {count: 1})}
      </h2>
      <div className="events">
        <Event />
      </div>
    </div>
  );
};

export default EventContainer;
