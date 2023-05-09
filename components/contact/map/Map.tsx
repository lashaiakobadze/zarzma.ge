import React from "react";
import { GoogleMap, Marker, InfoWindow, MarkerF } from "@react-google-maps/api";

function Map({ options, center, zoom, mapContainerStyle, mapTypeId }: any) {
  //  {center: number, zoom: number}
  const [selected, setSelected] = React.useState(null);

  const onSelect = (item: any) => {
    setSelected(item);
  };

  return (
    <GoogleMap
      options={options}
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={zoom}
      mapTypeId={mapTypeId}
      onLoad={() => console.log("Map Component Loaded...")}
    >
      <MarkerF
        position={center}
        onLoad={() => console.log("Marker Loaded")}
        icon="https://picsum.photos/64"
      />
      {/* <Marker position={center} onClick={() => onSelect(center)}>
        {selected ? (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h3>Your location</h3>
            </div>
          </InfoWindow>
        ) : null}
      </Marker> */}
    </GoogleMap>
  );
}

export default Map;
