import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { t } from "i18next";
import { useAppNavigation } from "../hooks/useNavigation";
import Button from "../components/ui/Button/Button";
import usePageTitle from "../hooks/usePageTitle";
import Footer from "../components/Footer/Footer";

function NotFound() {
  const { goToHome } = useAppNavigation();

  usePageTitle(`${t("title")} | 404`);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Banner />
          <div className="notfound col-12">
            <h1>404</h1>
            <p>{t("notFound.text")}</p>
            <Button textKey="notFound.backBtn" onClick={goToHome} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default NotFound;
