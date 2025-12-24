import { memo, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../ui/button";

 const ShopMap = memo( ()=> {

  const shopPosition = useMemo(() => [8.9806, 38.7578], []);

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
          <div className="flex flex-col gap-1">
            <strong>My Shop</strong>
            <span>+251 943712048</span>
              <span>Addis Ababa, Bole</span>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${shopPosition[0]},${shopPosition[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            <Button className="mt-2 bg-blue-700 hover:bg-blue-600 cursor-pointer">
              Get Directions
            </Button>
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
 )

 export default ShopMap;
