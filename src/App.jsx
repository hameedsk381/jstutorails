import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
const[data,setData] = useState([])
  useEffect(
    ()=>{
      fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(newdata => setData(newdata))
    },[]
  )
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>console.log(res.data))
},[])
 
  return (
    <div>
      {data.map(item=> <ul key={item.id}>
        <li>id: {item.id}<br/>title:{item.title}<br/>body: {item.body.toUpperCase()}</li>
        
      </ul>)}
    </div>
   
  )
}
