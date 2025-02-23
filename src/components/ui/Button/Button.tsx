import { useTranslation } from "react-i18next";
import "./Button.scss";

interface Button {
  textKey: string;
  variant?: 'btn-white';
  size?: 'btn-sm';
  onClick: () => void;
}

const Button: React.FC<Button> = ({textKey, onClick, variant='', size =''}) => {
  const { t } = useTranslation();

  return (
    <button onClick={onClick} className={`btn ${variant} ${size}`}>
      {t(textKey)}
    </button>
  );
};

export default Button;
