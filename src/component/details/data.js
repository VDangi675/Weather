import React from "react";

import "../details/data.css"
export default function  Details({data}){
    return (
        <>
        <div className="d">  
     <h2>Weather Details Of City == {data.name}</h2>
     <h2>Current Temprature = {data.main.temp}kal</h2>
     <h2>Humidity = {data.main.humidity}</h2>
     <h2>visibility = {data.visibility}</h2>
        </div>
        </>
    )
}