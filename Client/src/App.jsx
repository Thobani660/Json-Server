import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const traineeDataURL ="http://localhost:4000/trainees"
const [list,setList] = useState([])

useEffect(() => {
console.log("effect fun")
const fetchTraineeData = async () => {
  try{
const response = await fetch(traineeDataURL)
const traineeData = await response.json()
setList(traineeData)
console.log("now im tired", traineeData)
  }
  catch(error){
alert
  }
}
},[])

  const car = {type:"Fiat", model:"500", color:"white"};
  const trainee = {name:"Thobani", age:"*", favColor:"SKYBLUE", location:"PMB" , datatype:""}

  return (
    <>
    
    <h1> My Name is: {trainee.name} </h1>

    <p>I live @ {trainee.location} and my Favourite Colour is {trainee.favColor}</p>

  

    {/* <p>I love G{trainee.datatype}  ""</p> */}

    </>
  )
}

export default App
