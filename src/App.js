import React from 'react'
import { GoogleMap, KmlLayer, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 59,
  lng: 25
};

const typeId = 'terrain';


function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB7OCPR8vU0USb6NYLLbLYlWywetyS5r8s"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        mapTypeId={typeId}
        center={center}
        zoom={6}
      >
        <KmlLayer url="https://trackme.ekstreem.ee/tracks/track/Jaanipaevrattas/trackline.kml" />
        <KmlLayer url="https://trackme.ekstreem.ee/tracks/track/Jaanipaevrattas/placemarksmsg.kml" />
        <KmlLayer url="https://trackme.ekstreem.ee/tracks/track/Jaanipaevrattas/plannedtrack.kml" />
        <KmlLayer url="https://trackme.ekstreem.ee/tracks/track/PolvaPuka365km/plannedtrack.kml?dummy=1603383751884" />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)