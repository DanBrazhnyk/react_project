import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Pages/main/Main';
import "./css/style.css"
import { HashRouter, Routes, Route } from "react-router-dom";
import AirMaxPro from './Pages/shoes/airMaxPro';
import AirForce from './Pages/shoes/Airforce';
import AirMax from './Pages/shoes/Airmax';
import AirMax3 from './Pages/shoes/Airmax3';
import AirMax4 from './Pages/shoes/Airmax4';
import AirmaxOrange from './Pages/shoes/AirmaxOrange';
import Running from './Pages/shoes/Running';
import Allwhyte from './Pages/shoes/Allwhyte';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <HashRouter>
    <Routes>
    <Route path="/" element={<Main />} /> 
    <Route path="/AirMax" element={<AirMax />}/>
    <Route path="/AirMax3" element={<AirMax3 />}/>
    <Route path="/AirMax4" element={<AirMax4 />}/>
    <Route path="/AirMaxPro" element={<AirMaxPro />}/>
    <Route path="/AirForce" element={<AirForce />}/>
    <Route path="/AirmaxOrange" element={<AirmaxOrange />}/> 
    <Route path="/Running" element={<Running />}/>  
    <Route path="/Allwhyte" element={<Allwhyte />}/>
    </Routes>
    </HashRouter>
);

