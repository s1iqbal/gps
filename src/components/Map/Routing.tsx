import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing() {

  const map = useMap();
  const pointA = useSelector((state: RootState) => state.form.pointA);
  const pointB = useSelector((state: RootState) => state.form.pointB);

  useEffect(() => {
    if (!map) return;
    const routingControl = L.Routing.control({
      waypoints: [pointA, pointB],
      routeWhileDragging: true,
      showAlternatives: true,
      altLineOptions: {
        styles: [{ color: 'blue', opacity: 0.6, weight: 4 }]
      },
      draggableWaypoints: false,
    },).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, pointA, pointB]);

  return null;
}
