import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import { Link } from "react-router";
import { useAppNavigation } from "../../../hooks/useNavigation";

const Map = () => {
  const { getStorePath } = useAppNavigation();
  
  const mapRef = useRef(null);
  const latitude = 45.508888; // mtl
  const longitude = -73.561668; // mtl
  const position: LatLngExpression = [45.5520502, -73.5513515];

  type store = {
    name: string,
    slug: string,
    position: LatLngExpression,
  }

  const stores: store[] = [
    {
      name: "Retro MTL",
      slug: "retro-mtl",
      position: [45.5520502, -73.5513515]
    },
    {
      name: "Coin Game Over (Le)",
      slug: "coin-game-over",
      position: [45.500548,-73.426426]
    }
  ];

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div id="map">
      <MapContainer center={[latitude, longitude]} zoom={11} ref={mapRef} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Additional map layers or components can be added here */}
        { stores.map( store => (
          <Marker position={store.position}>
            <Popup>
              { store.name } <br /> <Link to={getStorePath(store.slug)}>Voir</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;