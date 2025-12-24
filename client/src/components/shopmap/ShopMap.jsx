import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const shopPosition = [8.9806, 38.7578]; // Addis Ababa (replace with your shop)

export default function ShopMap() {
  return (
    <MapContainer
      center={shopPosition}
      zoom={15}
      style={{ height: "400px", width: "100%", zIndex: "10", borderRadius: "10px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={shopPosition}>
        <Popup>
          <strong>My Shop</strong>
          <br />
          Addis Ababa
          <br />
          +251 9XX XXX XXX
        </Popup>
      </Marker>
    </MapContainer>
  );
}
