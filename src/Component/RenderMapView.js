import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const RenderMapView = ({style, onRegionChange, coordinate, region }) => {
    return(
      <MapView
          style = {style}
          region={ region }
          onRegionChange = { onRegionChange }
       >
          <Marker
            draggable
            coordinate={coordinate}
            title='Acko'
            description='A Insurance company'
          />
       </MapView>
    )
  }

  export default RenderMapView