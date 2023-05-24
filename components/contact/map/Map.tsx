import React from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

function Map({ options, center, zoom, mapContainerStyle, mapTypeId }: any) {
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
      <Marker
        position={center}
        onClick={() => onSelect(center)}
        icon={{
          url: "https://picsum.photos/64",
          scaledSize: new window.google.maps.Size(64, 64),
        }}
      />
      {selected && (
        <InfoWindow
          position={selected}
          onCloseClick={() => setSelected(null)}
        >
          <div>
            <h3>Your location</h3>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

export default Map;
