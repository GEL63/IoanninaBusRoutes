import './App.css';
import React,{useState} from 'react';
import { Bar } from "react-chartjs-2";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import Mapp from './Map';
import Mylocation from '../Location/Location';
import Charts from '../Charts/Charts';
import TopNavigator from '../Menu/TopNavigator';
import {Button} from '../Menu/Style';
function App() {
    const [chartButton, setChartButton] = useState(0);

    return (
	    <div style={{backgroundColor: '#132161'}}>
        <TopNavigator/>
        <br></br>
        <Mapp/>
        <br></br>
        <br></br>
        <br></br>
        <a></a>
        
        
	    </div>
    );
}

export default App;
