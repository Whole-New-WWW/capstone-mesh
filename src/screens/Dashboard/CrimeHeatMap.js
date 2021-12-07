import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Heatmap } from 'react-native-maps';
import { getManhattanCrimeData } from '../../../api';

export default function CrimeHeatMap() {
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

  // Heatmap component takes points prop
  // Map over crime data to get lat and long in required format
  let points = data.map(crime => {
    return (
      {
        latitude: Number(crime.latitude), 
        longitude: Number(crime.longitude),
        // weight is optional prop
        weight: 1
      }
    )
  })
  // Heatmap component takes gradient prop
  let gradient = {
    colors: ['purple', 'red', 'blue', 'gray'],
    startPoints: [0, .125, .45, 1],
    colorMapSize: 256
  }
  // Return Heatmap component with props passed in
  return (
    <>
      {loading ? <ActivityIndicator /> : (
        <Heatmap
          points={points}
          // These are optional props
          radius={5}
          opacity={0.7}
          gradient={gradient}
        />
      )}
    </>
  )
}