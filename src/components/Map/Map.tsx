
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Marker, Popup, MapContainer, TileLayer, useMapEvents, Circle, FeatureGroup, LayerGroup, LayersControl, Rectangle } from 'react-leaflet'
import L from "leaflet";
import Routing from "./Routing.tsx";
import 'leaflet/dist/leaflet.css';
import '../../App.css'
import Form from '../UI/Form/Form.tsx'

interface MapInterface {
  selectedMap: string;
  maps: object;
}


function Map() {
  const [map, setMap]= useState<MapInterface>({
    selectedMap: "normal",
    maps: {
      "dark": "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      "alidade_smooth_dark": "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      "normal": "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    }
  })

  useEffect(()=>{
    setMap({ ...map, [`selectedMap`]: `normal`})
    console.log('selected map skin: ' + map.selectedMap)
  },[]) 

  const center =  L.latLng(43.784015, -79.299381)
  const rectangle: number[][] = [
    [43.6, -80],
    [43.9, -79.5],
  ]

  return (
    <div className='Map'>
        <Form />
        <MapContainer
          center={center}
          zoom={15}
          maxZoom={23}
          minZoom={3}
          scrollWheelZoom={true}>
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={`${map.maps[`${map.selectedMap}`]}`}
            maxZoom={22}
          />
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={maps[1]}
            maxZoom={22}
          />  */}

          <Routing />
          <LayersControl position="bottomleft">
            <LayersControl.Overlay name="Map Change">
                <FeatureGroup pathOptions={{ color: 'purple' }}>
                  <Popup>Popup in FeatureGroup</Popup>
                  <Circle center={[43.784015, -79.299381]} radius={100} />
                  <Rectangle bounds={rectangle} />
                </FeatureGroup>
            </LayersControl.Overlay>
          </LayersControl>

          <LayersControl position="topleft">
            <LayersControl.Overlay name="Feature group">
              <FeatureGroup pathOptions={{ color: 'purple' }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[43.784015, -79.299381]} radius={100} />
                <Rectangle bounds={rectangle} />
              </FeatureGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Layer group with circles">
              <LayerGroup>
                <Circle
                  center={[43.784015, -79.299381]}
                  pathOptions={{ fillColor: 'blue' }}
                  radius={100}
                />
                <Circle
                  center={[43.637861, -79.535651]}
                  pathOptions={{ fillColor: 'red' }}
                  radius={100}
                  stroke={true}
                  color='red'
                />
                <LayerGroup>
                </LayerGroup>
              </LayerGroup>
              <LayersControl.Overlay name="Test">
              <FeatureGroup pathOptions={{ color: 'purple' }}>
                  <Popup>Popup in FeatureGroup</Popup>
                  <Circle center={[43.784015, -79.299381]} radius={100} />
                  <Rectangle bounds={rectangle} />
              </FeatureGroup>
            </LayersControl.Overlay>
            </LayersControl.Overlay>    
          </LayersControl>
          {/* <LocationMarker />
          <DraggableMarker />  */}
        </MapContainer>
    </div>
  )
}

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Home Location</Popup>
    </Marker>
  )
}

function DraggableMarker() {
  const center = [43.784588, -79.299188]
  const [draggable, setDraggable] = useState(true)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker:unknown = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  const marker = markerRef.current
  return (
    <Marker
      riseOnHover={true}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={200}>
        <span onClick={toggleDraggable}>
          {draggable
            ? `Marker is draggable at ${position}`
            : `Click here to make marker draggable `}
        </span>
      </Popup>
    </Marker>
  )
}

export default Map
