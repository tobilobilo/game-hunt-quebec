import "../assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Header from "../components/Header/Header";
import SimpleMap from "../components/SimpleMap";
import Banner from "../components/Banner/Banner";
import useLanguageRoute from "../hooks/useLanguageRoute";

function App() {
  useLanguageRoute();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <Banner />
          <SimpleMap />
        </div>
      </div>
    </>
  );
}

export default App;
