import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SimpleMap from "../components/SimpleMap";
import Banner from "../components/Banner/Banner";
import useLanguageRoute from "../hooks/useLanguageRoute";
import Summary from "../components/Summary/Summary";
import EventContainer from "../components/Event/EventContainer";

function App() {
  useLanguageRoute();

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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
