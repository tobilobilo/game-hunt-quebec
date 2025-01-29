import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { type LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = 45.508888; // mtl
  const longitude = -73.561668; // mtl
  const position: LatLngExpression = [45.5520502, -73.5513515];

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <div id="map" className="col-12">
      <header>I'm a header</header>
      <MapContainer center={[latitude, longitude]} zoom={11} ref={mapRef} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Additional map layers or components can be added here */}
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SimpleMap;
