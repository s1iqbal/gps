import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";


L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {
  const map = useMap();

  const pointA = useSelector((state: RootState) => state.form.pointA);
  const pointB = useSelector((state: RootState) => state.form.pointB);
  useEffect(() => {
    if (!map) return;
    const pointAcoord = L.latLng(pointA.lat, pointA.lon), pointBcoord = L.latLng(pointB.lat, pointB.lon)
    const routingControl = L.Routing.control({
      waypoints: [pointAcoord, pointBcoord],
      routeWhileDragging: true
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, pointA, pointB]);

  return null;
}
