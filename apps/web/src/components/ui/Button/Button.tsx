import { useTranslation } from "react-i18next";
import "./Button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Button {
  id?: string;
  textKey: string;
  variant?: "btn-white";
  size?: "btn-sm";
  onClick?: () => void;
  href?: string;
  icon?: IconProp;
  external?: boolean;
}

const Button: React.FC<Button> = ({
  id,
  textKey,
  onClick,
  href,
  icon,
  external = false,
  variant = "",
  size = "",
}) => {
  const { t } = useTranslation();

  return (
    <>
      {href && (
        <a
          href={href}
          id={id}
          className={`btn ${variant} ${size}`}
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : ""}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {t(textKey)}
        </a>
      )}
      {onClick && (
        <button onClick={onClick} id={id} className={`btn ${variant} ${size}`}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {t(textKey)}
        </button>
      )}
    </>
  );
};

export default Button;
