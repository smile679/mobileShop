import { useMap } from "react-leaflet";

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
      className="absolute top-3 right-3 z-60
                 bg-white text-sm px-3 py-2 rounded-md
                 shadow-md hover:bg-gray-100"
    >
      Back to Shop
    </button>
  );
}
