import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SimpleMap from "../components/SimpleMap";
import Banner from "../components/Banner/Banner";
import useLanguageRoute from "../hooks/useLanguageRoute";
import Summary from "../components/Summary/Summary";
import EventContainer from "../components/Event/EventContainer";
import Contact from "../components/Contact/Contact";
import usePageTitle from "../hooks/usePageTitle";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  useLanguageRoute();
  usePageTitle(`${t('title')} | ${t('motto')}`);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Banner />
          <SimpleMap />
          <div className="col-12">
            <Summary />
            <EventContainer />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
