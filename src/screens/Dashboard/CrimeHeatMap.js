import { isLoading } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { Heatmap } from 'react-native-maps';
import { getManhattanCrimeData } from '../../../api';

export default function CrimeHeatMap() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchCrimeData() {
      getManhattanCrimeData().then(crimeStats => {
        setData(crimeStats);
        // setLoading(false);
      })
    }
    fetchCrimeData();
  }, []);

  let points = data.map(crime => {
    return (
      {
        latitude: Number(crime.latitude), 
        longitude: Number(crime.longitude),
        // weight: 1
      }
    )
  })

  let gradient = {
    colors: ['purple', 'red', 'blue', 'gray'],
    startPoints: [0, .125, .45, 1],
    colorMapSize: 256
  }

  console.log('HERE ARE THE POINTS', points);

  return(
    <Heatmap
      points={points}
      radius={5}
      opacity={0.7}
      gradient={gradient}
    />
  )
}