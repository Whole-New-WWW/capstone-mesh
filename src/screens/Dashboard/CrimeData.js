import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { getManhattanCrimeData } from '../../../api';
import { Marker } from 'react-native-maps';

export default function CrimeData() {
  const [loading, setLoading] = useState(true);
  // initial render will have data = []
  const [data, setData] = useState([]);
  // Performs side effect - Similar to component did mount 
  useEffect(() => {
    // await crime data from axios request in api file
    function fetchCrimeData() {
      getManhattanCrimeData().then(crimeStats => {
        // set state for data
        setData(crimeStats);
        setLoading(false);
      })
    }
    fetchCrimeData();
  }, []); 
  // empty array tells useEffect to only run once

  return (
    <>
    {/* map over crime data and render marker for each point */}
    {/* Determine which crimes occurred on the streets of nyc, not inside someone's home for example */}
      {loading ? <ActivityIndicator /> : (
        <>
        {data.map((crime, index) => (
          <Marker
            key={index}
            // Number() used to address error initially being thrown re: invalid type "string" passed into coordinate
            coordinate={{latitude: Number(crime.latitude), longitude: Number(crime.longitude)}}
            // Reconsider what titles we use/ what data is displayed. Can be triggering for users
            title={crime.law_cat_cd}
            description={crime.pd_desc}
            // Documentation says that adding a custom image may not allow the images to render properly on different devices
            // Consider writing functionality that renders different icon based on crime type to avoid describing the crimes
            image={require('../../../assets/icons/crimeMarker.png')}
          />
        ))}
        </>
      )}
    </>
  )
}