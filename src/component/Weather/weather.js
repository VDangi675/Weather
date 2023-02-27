import react, { useEffect, useState } from "react"
import axios from "axios"
import "../Weather/weather.css"
import Details from "../details/data"
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
export default function Weather(){
    const [city,setCity]= useState("")
    const [data,setData] = useState({})

     

    const Weather=(cityname)=>{
        if(!cityname) return alert("enter a valid City")

        axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=3da7eae1d0044bd5976e2f7824c8c368").then((res)=>{
         console.log(res.data)
        setData(res.data)
        }).catch((err)=>{
            console.log("err",err)
        })
    }




const  Search=(e)=>{
    e.preventDefault()
 console.log(setCity(e.target.value))
Weather(city)
let arr = []
arr.push({city})
console.log(arr)
}

    return (
        <>
        <div className="data">
            <form className="details">
                <h1>Weather App</h1>
                <div className="city">
                    <input   value={city}  onChange={(e)=>setCity(e.target.value)} className="input" type='search' placeholder="Enter The City Name Here "/>
                  <button className="btn" onClick={(e)=>Search(e)}  >Search</button>
                </div>
                <div className="Show_data">
                <Details data={data}/>
               {/* {
                data.map((data,id)=>{
                    return (
                   
                        <>
                      <Details data={data} key={id} />
                       
                        </>
                    )
                       
                    
                })
               } */}
      
                      </div>
            </form>
        </div>
        </>
    )
}