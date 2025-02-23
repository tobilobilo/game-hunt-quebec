import { useTranslation } from "react-i18next";
import "./Contact.scss";
import icons from "/src/assets/svg/contact-icons.svg";
import quebec from "/src/assets/svg/contact-quebec2.svg";
import Button from "../ui/Button/Button";
import { log } from "console";

const Contact = () => {
  const { t } = useTranslation();

  function contactMe() {
    console.log('Contact Me!')
  }

  return (
    <footer className="main-contact col-12">
      <img className="contact-quebec" src={quebec} alt="quebec" aria-hidden="true" />
      <img className="contact-icons" src={icons} alt="icons" aria-hidden="true" />
      <div className="main-contact-content">
        <h3>{t("contact.title")}</h3>
        <p>{t("contact.details")}</p>
        <Button textKey="contact.button" variant="btn-white" onClick={contactMe} />
      </div>
    </footer>
  );
};

export default Contact;
