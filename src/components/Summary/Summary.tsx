import { useTranslation } from "react-i18next";
import "./Summary.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  const { t } = useTranslation();

  return (
    <div className="summary">
      <h2>
        <i aria-hidden="true"><FontAwesomeIcon icon={faCrosshairs} /></i> {t("summary.title")}
      </h2>
      <p>{t("summary.text")}</p>
    </div>
  );
};

export default Summary;
