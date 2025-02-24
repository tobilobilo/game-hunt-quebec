import { useTranslation } from "react-i18next";
import "./Contact.scss";
import icons from "/src/assets/svg/contact-icons.svg";
import quebec from "/src/assets/svg/contact-quebec.svg";
import quebecMobile from "/src/assets/svg/contact-quebec-mobile.svg";
import Button from "../ui/Button/Button";

const Contact = () => {
  const { t } = useTranslation();

  function contactMe() {
    console.log('Contact Me!')
  }

  return (
    <div className="main-contact col-12">
      <div className="main-contact-content">
        <picture className="contact-quebec contact-img">
          <source srcSet={quebec} media='(min-width: 840px)' />
          <img src={quebecMobile} className="contact-img" alt="quebec" aria-hidden="true" draggable="false" />
        </picture>
        {/*<img className="contact-quebec contact-img" srcSet={`${quebecMobile} 320w, ${quebec} 768w`} src={quebec} alt="quebec" aria-hidden="true" />*/}
        <img className="contact-icons contact-img" src={icons} alt="icons" aria-hidden="true" draggable="false" />
        <div className="main-contact-infos">
          <h3>{t("contact.title")}</h3>
          <p>{t("contact.details")}</p>
          <Button textKey="contact.button" variant="btn-white" onClick={contactMe} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
