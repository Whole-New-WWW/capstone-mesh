import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { getManhattanCrimeData } from '../../../api';
import { Marker } from 'react-native-maps';

export default function CrimeData() {
  const [isLoading, setLoading] = useState(true);
  // initial render will have data and setData = []
  const [data, setData] = useState([]);
  // Similar to component did mount
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
  }, []) 
  // empty array tells useEffect to only run once

  console.log('HERE IS THE CRIME DATA', data);

  return (
    <>
    {/* map over crime data and render marker for each point */}
      {isLoading ? <ActivityIndicator /> : (
        <>
        {data.map((crime, index) => (
        <Marker
          key={index}
          // Number() used to address error initially being thrown re: invalid type "string" passed into coordinate
          coordinate={{latitude: Number(crime.latitude), longitude: Number(crime.longitude)}}
          title={crime.law_cat_cd}
          description={crime.pd_desc}
        />
        ))}
        </>
      )}
    </>
  )
}