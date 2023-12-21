import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [flavors, setFlavors] = useState([])

useEffect (() => {
  const fetchflavors = async () => {
    const {data} = await axios.get('http://localhost:3009/api/flavors')
    console.log(data)
    setFlavors(data)
  }
  fetchflavors()
},[])

const deleteflavor = async(flavorz) => {
  try {
    const response = await axios.delete(`http://localhost:3009/api/flavors/${flavorz.id}`)
    const newflavors = flavors.filter((flavor) => {
      return flavor.id !== flavorz.id
    })
    setFlavors(newflavors)
  } catch (error) {
    console.log(error)
  }
}



  return (
   <div>
    <h1>Welcome to the Creamery!! There are {flavors.length} flavors!</h1>
    {
      flavors.map((flavor) => {
        return(
          <div className= "yum" key={flavor.id}>
            {flavor.name}
            <button onClick={() => {deleteflavor(flavor)}}>X</button>
            </div>
        )
      })
    }
   </div>
  )
}

export default App
