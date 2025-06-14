import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useTranslation } from "react-i18next";
import useLanguageRoute from "../hooks/useLanguageRoute";
import usePageTitle from "../hooks/usePageTitle";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import StoreContainer from "../components/Stores/Container/Container";
import Summary from "../components/Summary/Summary";
import EventContainer from "../components/Event/EventContainer";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router";
import NotFound from "./NotFound";
import { DataProvider } from "../contexts/DataContext";

function App() {
  const { t } = useTranslation();
  const { storeId } = useParams();

  useLanguageRoute();
  usePageTitle(`${t('title')} | ${t('motto')}`);

  if(storeId === 'error') return <NotFound />

  return (
    <DataProvider>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Banner />
          <StoreContainer />
          <div className="col-12">
            <Summary />
            <EventContainer />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
