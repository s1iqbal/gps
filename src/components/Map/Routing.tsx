import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";


L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing(props: { pointA: any; pointB: any; }) {
  const map = useMap();

  useEffect(() => {
    
    if (!map) return;

    const pointA = props.pointA;
    const pointB = props.pointB;
    console.log(pointA)
    const routingControl = L.Routing.control({
      waypoints: [pointA, pointB],
      routeWhileDragging: true
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
