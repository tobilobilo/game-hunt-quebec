import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import { t } from "i18next";
import { useAppNavigation } from "../hooks/useNavigation";
import Button from "../components/ui/Button/Button";

function NotFound() {
  //useLanguageRoute();
  const { goToHome } = useAppNavigation();

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
        </div>
      </div>
    </>
  );
}

export default NotFound;
