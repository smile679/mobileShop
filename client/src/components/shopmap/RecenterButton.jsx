import { useMap } from "react-leaflet";
import gpsLocator from "../../assets/gpsLocator.png"

export default function RecenterButton({ position, zoom = 15 }) {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(position, zoom, {
      animate: true,
      duration: 1.2,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-10 right-10 z-1000
                bg-white text-sm
                 shadow-md shadow-gray-900 p-2 rounded-full border-2 border-gray-900"
    >
      <img src={gpsLocator} alt="locator" className="w-6"/>
    </button>
  );
}
