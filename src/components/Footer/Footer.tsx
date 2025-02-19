import "./Footer.scss";
import logo from "/src/assets/svg/logo-long-blue.svg";

const Footer = () => {

  return (
    <footer className="main-footer col-12">
      <img src={logo} alt="Logo" className="logo" />
      <span>Jean-Pierre Rose - 2025</span>
    </footer>
  );
};

export default Footer;
