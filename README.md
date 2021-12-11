<img src="https://github.com/Whole-New-WWW/capstone-mesh/blob/main/assets/globe-logo.png" width="150" height="150" />

## Mesh: Commmunity Safety Network

<div style="display: flex;">
<img src="https://github.com/Whole-New-WWW/capstone-mesh/blob/main/assets/readme/login.gif" width="150">
<img src="https://github.com/Whole-New-WWW/capstone-mesh/blob/main/assets/readme/map.gif" width="150">
<img src="https://github.com/Whole-New-WWW/capstone-mesh/blob/main/assets/readme/safetynet.gif" width="150">
</div>

Capstone by Claudia, Josephine, Maxiel and Yilla

## About
Mesh is a personal safety app that helps you find the safest path to your destination , and automatically alerts your friends if anything unexpected happens during your trip.

- Plan your safest routes around town with a crime-density heat map that uses over 300,000 reported incidents via the NYC public database.
- Safety Nets: create trusted groups of contacts who receive your notifications and SOS signals.
- Send automatic messages to your Safety Nets when you get home, reach safe-points in your journey, or if something goes wrong.
- Contribute to Mesh's safety data by filing your own incident reports.

## Getting Started

Download our mobile app on your desktop. Please have <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">Xcode</a> downloaded to see Android or iOS Simulators or use Expo Go on mobile.

```
git clone git@github.com:Whole-New-WWW/capstone-mesh.git
yarn install
```

Create a file called secrets.js and import your Firestore config 
```
// secret file to import firebase info

const config = {
  FIREBASE_API_KEY: "[FIREBASE INFO HERE]"",
  FIREBASE_AUTH_DOMAIN: "[FIREBASE INFO HERE]",
  FIREBASE_PROJECT_ID: "[FIREBASE INFO HERE]",
  FIREBASE_STORAGE_BUCKET: "[FIREBASE INFO HERE]",
  FIREBASE_MESSAGING_SENDER_ID: "[FIREBASE INFO HERE]",
  FIREBASE_APP_ID: "[FIREBASE INFO HERE]",
  FIREBASE_MEASUREMENT_ID: "[FIREBASE INFO HERE]"
};

const API_KEY = '[API KEY HERE]'

export { config, API_KEY };
```

After creating this file, you can start editing or run ```expo start``` to view a simulation.

## Team
<table style="text-align: center;">
<tr>
<td>Claudia</td>
<td>Josephine</td>
<td>Maxiel</td>
<td>Yilla</td>
</tr>
<tr>
<td><a href="https://github.com/cflores-1">GitHub</a></td>
<td><a href="https://github.com/JSimple">GitHub</a></td>
<td><a href="https://github.com/MaxielMrvaljevic">GitHub</a></td>
<td><a href="https://github.com/yillachen">GitHub</a></td>
</tr>
<tr>
<td><a href="https://www.linkedin.com/in/claudia-f-261691117/">LinkedIn</a></td>
<td><a href="https://www.linkedin.com/in/simplej/">LinkedIn</a></td>
<td><a href="https://www.linkedin.com/in/maxielmrvaljevic/">LinkedIn</a></td>
<td><a href="https://www.linkedin.com/in/yilla-chen/">LinkedIn</a></td>
</tr>
</table>

## Resources
- Google Maps & Places
- <a href="https://data.cityofnewyork.us/Public-Safety/NYC-crime/qb7u-rbmr">NYC Crime Database</a>
- Free icons from <a href="https://www.flaticon.com/">Flaticon</a>.
