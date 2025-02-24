import { useTranslation } from "react-i18next";
import "./Button.scss";

interface Button {
  textKey: string;
  variant?: 'btn-white';
  size?: 'btn-sm';
  onClick?: () => void;
  href?: string;
  external?: boolean;
}

const Button: React.FC<Button> = ({textKey, onClick, href, external= false, variant='', size =''}) => {
  const { t } = useTranslation();

  return (
    <>
      {href && <a href={href} className={`btn ${variant} ${size}`} target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : ""}>
        {t(textKey)}
      </a> }
      {onClick && <button onClick={onClick} className={`btn ${variant} ${size}`}>
        {t(textKey)}
      </button> }
    </>
  );
};

export default Button;
