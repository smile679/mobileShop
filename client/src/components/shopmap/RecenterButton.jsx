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
                bg-blue-500 text-sm
                 shadow-md p-2 rounded-full"
    >
      <img src={gpsLocator} alt="locator" className="w-10"/>
    </button>
  );
}
