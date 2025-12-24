import { memo, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../ui/button";
import RecenterButton from "./RecenterButton";

 const ShopMap = memo( ()=> {

  const shopPosition = useMemo(() => [8.9806, 38.7578], []);

  return (
    <div className="relative w-full h-75 sm:h-100 rounded-xl overflow-hidden">
       <MapContainer
          center={shopPosition}
          zoom={15}
          // style={{ height: "400px", width: "100%", zIndex: "10", borderRadius: "10px" }}
          className="w-full h-full z-10"
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
          <RecenterButton position={shopPosition} />
        </MapContainer>
    </div>
  );
}
 )

 export default ShopMap;
