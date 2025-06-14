import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import { Link } from "react-router";
import { useAppNavigation } from "../../../hooks/useNavigation";
import { useData } from "../../../contexts/DataContext";

const Map = () => {
  const { getStorePath } = useAppNavigation();
  const { stores } = useData();

  const mapRef = useRef(null);
  const latitude = 45.508888; // mtl
  const longitude = -73.561668; // mtl

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div id="map">
      <MapContainer center={[latitude, longitude]} zoom={11} ref={mapRef} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Additional map layers or components can be added here */}
        { stores && stores.map( store => (
          <Marker position={store.position}>
            <Popup>
              <Link to={getStorePath(store.slug)} className="popup-link">{ store.name }</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;