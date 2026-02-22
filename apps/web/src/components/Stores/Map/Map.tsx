import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "./Map.scss";
import { Link } from "react-router";
import { useAppNavigation } from "../../../hooks/useNavigation";
import { useData } from "../../../contexts/DataContext";

type LeafletIconDefaultWithGetIconUrl = L.Icon.Default & {
  _getIconUrl?: () => string;
};

// Fix Leaflet icon paths for bundled assets
delete (L.Icon.Default.prototype as LeafletIconDefaultWithGetIconUrl)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
});

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
        <MarkerClusterGroup>
          {/* Additional map layers or components can be added here */}
          { stores && stores.map( store => (
            <Marker position={store.position} key={store.slug}>
              <Popup>
                <Link to={getStorePath(store.slug)} className="popup-link">{ store.name }</Link>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;