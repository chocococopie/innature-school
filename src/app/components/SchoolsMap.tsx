// components/SchoolsMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix marker icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Example schools data
const schools = [
  { name: "Green School Berlin", position: [52.52, 13.405] },
  { name: "Eco School Hamburg", position: [53.5511, 9.9937] },
  { name: "Bee School Munich", position: [48.1351, 11.582] },
];

export default function SchoolsMap() {
  const [isClient, setIsClient] = useState(false);

  // Only render map on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // don't render on server

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[51.1657, 10.4515]} // Germany center
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {schools.map((school, index) => (
          <Marker key={index} position={school.position as any}>
            <Popup>{school.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
