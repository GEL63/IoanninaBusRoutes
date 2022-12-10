import React, {Component,useState,useEffect,useRef,callBack} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import stops from '../files/stops.json';
import {Layer, NavigationControl,Marker} from 'react-map-gl';
import ReactMapGL, {Image} from 'react-map-gl';
import * as turf from '@turf/turf';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';
import {lineString as makeLineString} from '@turf/helpers';
import './Map.css';
import sideMenu from '../Menu/SideMenu.js';
import { stack as Menu } from 'react-burger-menu';
import linesCsv from '../files/lines.csv';
import routeCsv from '../files/route.csv';
import stopsCsv from '../files/stop.csv';
import Papa from 'papaparse';

//                                      INITIALIZATION OF VARIABLES
//flag for chosen bus-line
var sendFlag;
//call function inside const map
var call;
//global for id of bus-line
var stopID;
var codeLine;
var newstops;
var routeStops;
var wayComma;
var waypoints;
var radiuses;
var start;


const style = {
  width: '75%',
  height:'600px',
  borderRadius:'10px', 
  border :'2px solid blue',
  left:"300px",
  top:'150px',
  position:'absolute'
  
};


//                         FLAG FOR SETTING CHOSEN BUS
export const choosenBus ={
  choosenB : '0',

  get getChoosenB(){
    return this.choosenB;
  },

  set setChoosenB(newchoosenBus) {
    this.choosenB = newchoosenBus;
}

}
//                         UPDATE STOP ID ON CLICK
export function setID(data){
  console.log(codeLine+"CODE BUTTON")
  for(var i=0; i < data.length;i++){
    if(codeLine == data[i][1] && codeLine!=0){
       stopID=data[i][0];
      break;
    }
  }
  console.log(stopID +"STOPID NOW")
}

export async function setWay(code, callBack){
//parsing lines.csv and use the code from the button clicked (e.g. button 16 clicked , code=16) 
 //loop through lines.csv ,find the row and retrieve the id of the route in this row  
  codeLine=code;

  Papa.parse(linesCsv, {
    download: true,
    dynamicTyping: true,
    //function->const orismata mesa se parenthesiss
    complete: function (input) {
         callBack(input.data);

    }
  });
  getStops(setStops);
  getStopsArray(setStopsArray);
  

};

//                           PARSE ROUTE.CSV AND CREATE ARRAY OF BUS STOPS IDS ->ROUTESTOPS
function setStops(recordRoute){
  newstops=[];
  var stopIDs;
  for(var i=0; i < recordRoute.length;i++){
    if(stopID== recordRoute[i][2]){
      newstops=recordRoute[i][6];
      break;
    }
   }
   
   /*for(var i=0;i<stopIDs.length-1;i=i+4){
    routeStops.push(stopIDs[i] +stopIDs[i+1] +stopIDs[i+2] );
  }*/

 
}
function getStops(callBack){

  Papa.parse(routeCsv, {
    download: true,
    dynamicTyping: true,
    complete: function (input) {
        callBack(input.data);
  
    }
  });
  
};

function setStopsArray(stopsData){
  routeStops=[];
  routeStops=newstops.split(',');
  waypoints=[];
  var way = [];
  for(var i=0; i < routeStops.length;i++){
    for(var j=0; j < stopsData.length;j++){
      if(routeStops[i]== stopsData[j][1]){
        way.push(stopsData[j][3]+ "," +stopsData[j][2] + ";");
        break;
      }

    }

  }
  const radius =way.map(() => 40);
  radiuses = radius.join(';');
  //console.log(radiuses+"radd")
  //join all elems of array to represent a string
  wayComma =way.join('');
  waypoints=wayComma.slice(0, -1);
  // waypoints=wayComma.slice(0, -1);
  getRoute(codeLine);
  /*
  let way = [];
    for(var i=0; i < routeStops.length;i++){
    // filter the stops.json to get the json object with the bus-stop with code= routeStops[i]
    const result = Object.values(stops).filter(item => item.code === routeStops[i].toString());
  
    //retrieve lat and lon from object result
    const lat=Object.entries(result)[0][1].latitude;
    const lon=Object.entries(result)[0][1].longitude;
    //add it to array called way with comma and ; 
    way.push(lon + "," + lat + ";");
    

  }*/
   // const radius =way.map(() => 40);
    //radiuses = radius.join(';');
    //console.log(radiuses+"radd")
    //join all elems of array to represent a string
    //wayComma =way.join('');
    
   // waypoints=wayComma.slice(0, -1);

    
}

function getStopsArray(callBack){
    // Stream big file in worker thread
Papa.parse(stopsCsv, {
  download:true,
  dynamicTyping: true,
	complete: function(results) {
		callBack(results.data)
	}
});

}

//                                  DISPLAY ROUTE
export async function getRoute(code){

    console.log(waypoints);
    
    //                         CREATE A QUERY TO THE API 
     //waypoints.slice(0,-1) REMOVE LAST CHARACTER FROM WAYPOINTS STRING which is ';' in our case
    const query = await fetch(
      'https://api.mapbox.com/matching/v5/mapbox/driving/'+waypoints+ '?geometries=geojson&radiuses='+radiuses+'&steps=true&access_token=pk.eyJ1IjoiZGFuYWl0b3UiLCJhIjoiY2w5ZWp3NG5oMGdhZjNucGJxOXh2MTRuZCJ9.4DkyNzrCoBvSBIEy0r3IPg', { method: 'GET' });
    
    
    const json = await query.json();
    const data = json.matchings[0];
    const route = data.geometry;
    // einai to const me olh th diadromi
    /*const geojson = { 
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
         }
  };*/
  sendFlag = choosenBus.getChoosenB;
  
  call(route);
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                          CONST MAPP
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------


export const  Mapp = () => {
 
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [flag, setFlag] = useState(1);

  //___________________________________________________________________________________________________________SETUP OUR MAP
  useEffect(() => {
    mapboxgl.accessToken ='pk.eyJ1IjoiZGFuYWl0b3UiLCJhIjoiY2w5ZWp3NG5oMGdhZjNucGJxOXh2MTRuZCJ9.4DkyNzrCoBvSBIEy0r3IPg'
    //pk.eyJ1IjoiZGFuYWl0b3UiLCJhIjoiY2w5ZWp3NG5oMGdhZjNucGJxOXh2MTRuZCJ9.4DkyNzrCoBvSBIEy0r3IPg'

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/danaitou/clb8mwlwk001c14n0yzw21m6t", // stylesheet location
        center: [20.853746, 39.665028],
        zoom: 12
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });

        //___________________________________________________________________________________________________________ZOOM IN ,ZOOM OUT
      map.addControl(new mapboxgl.NavigationControl());

        //___________________________________________________________________________________________________________MARKERS FOR BUS STATIONS
      map.on('load', () => {
        document.getElementById('slider').addEventListener('input', (event) => {
          const hour = parseInt(event.target.value);
          // update the map
          
        
          // converting 0-23 hour to AMPM format
          const ampm = hour >= 12 ? 'PM' : 'AM';
          const hour12 = hour % 12 ? hour % 12 : 12;
        
          // update text in the UI
          document.getElementById('active-hour').innerText = hour12 + ampm;
        });
        stops.forEach(function(marker){
            const el = document.createElement('div');
            el.className= 'marker';
            new mapboxgl.Marker(el).setLngLat([marker.longitude,marker.latitude]).setPopup(new mapboxgl.Popup({offset: 30}).setHTML('<h4>'+ marker.description.el+"<br>"+marker.lineNames + '</h4>')).addTo(map);
        })
      });

    };

    if (!map) initializeMap({ setMap, mapContainer });

   
  }, [map]);

//--------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------- HELPER FOR LAYER OF ROUTE ON MAP -----------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------

  call  = function(route){
    //console.log(Object.entries(route) +"rout")
    // if the route already exists on the map, we'll reset it using setData
   if (map.getSource('route')) {
    map.getSource('route').setData({
      type: 'Feature',
      properties: {},
      geometry: route
    });
   }
    // otherwise, we'll make a new request
    else {
    //               gia Line tou route
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: route
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': 'orange',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });

  }
  console.log(start)
  console.log(route.coordinates[0])
  
  if(start!=route.coordinates[0] || start==undefined){
    
    map.removeLayer('point');
    map.removeSource('point');
  
    
    start= route.coordinates[0];
    const point = {
    type: 'FeatureCollection',
    features: [{
    type: 'Feature',
    properties: {},
    geometry: {
      'type': 'Point',
      'coordinates': route.coordinates[0]
      }
    }]};
  //___________________________________________________________________________________________________________ADD BUS ON THE MAP
  
     map.addSource('point', {
      type: 'geojson',
      data: point
     });
  
    map.addLayer({
      id: 'point',
      source: 'point', // reference the data source
      type: 'symbol',
      
      layout: {
          'icon-image': 'bus', // reference the image
          'icon-size': 1.7,
          'icon-rotation-alignment': 'map',
          'icon-allow-overlap': true,
          'icon-ignore-placement': true
        }
      });
  }
    

  }  
    return( 
    <div> 
      
      <div ref={el => (mapContainer.current = el)} style={style} />
      <div/>
      
      
    </div>
    );
};


export default Mapp;












/*
//----------------------------------------------- KINISI ------------------------------------------------
const steps = 500;
let counter = 0;
const routeline = {
  type: 'Feature',
  features: [{
                'type': 'Feature',
                'geometry': {
                'type': 'LineString',
                'coordinates': [origin,destination]
                  }
  }]
};
const lineDistance = turf.length(routeline.features[0]);
const arc = [];
for (let i = 0; i < lineDistance; i += lineDistance / steps) {
  const segment = turf.along(routeline.features[0], i);
  arc.push(segment.geometry.coordinates);
}
  
// Update the route with calculated arc coordinates
routeline.features[0].geometry.coordinates = arc;

function animate() {
  const start = routeline.features[0].geometry.coordinates[counter >= steps ? counter - 1 : counter];
  const end = routeline.features[0].geometry.coordinates[counter >= steps ? counter : counter + 1 ];
  if (!start || !end) return;
       
      // Update point geometry to a new position based on counter denoting
      // the index to access the arc
      point.features[0].geometry.coordinates = routeline.features[0].geometry.coordinates[counter];
       
      // Calculate the bearing to ensure the icon is rotated to match the route arc
      // The bearing is calculated between the current point and the next point, except
      // at the end of the arc, which uses the previous point and the current point
      point.features[0].properties.bearing = turf.bearing(
          turf.point(start),
          turf.point(end)
      );
       
      // Update the source with this new data
      map.getSource('point').setData(point);
       
      // Request the next frame of animation as long as the end has not been reached
      if (counter < steps) {
          requestAnimationFrame(animate);
      }
       
      counter = counter + 1;
  }*/































  /*POINTS GIA ARXI KAI TELOS
          //------ MAP ON -----------------------------------------------
    //                      Add starting point to the map, i mple koukida
    
    map.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
          getRoute(origin);
  
          map.addLayer({
              id: 'point',
              type: 'circle',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [{
                      type: 'Feature',
                      properties: {},
                      geometry: {
                          type: 'Point',
                          coordinates: origin
                  }
              }]
              }
              },
              paint: {
                  'circle-radius': 10,
                  'circle-color': '#3887be'
              }
        });
        
      });//telos 1o mapon
  
  
      //         ending point, to kokkino shmeio termatismoy        
      map.on('load',() => {
        
        const end = {
          type: 'FeatureCollection',
          features: [{
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: destination
              }
            }]
         };
          if (map.getLayer('end')) {
            map.getSource('end').setData(end);
          } else {
            map.addLayer({
              id: 'end',
              type: 'circle',
              source: {
                type: 'geojson',
                data: {
                  type: 'FeatureCollection',
                  features: [{
                    type: 'Feature',
                    properties: {},
                    geometry: {
                      type: 'Point',
                      coordinates: destination
                    }
                  }]
               }},
              paint: {
              'circle-radius': 10,
              'circle-color': '#f30'
            } });
        }
      });*/