// create your App component here

import React, { useEffect, useState } from 'react'

function App() {

    const [dogImage, setdogImage ] =useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            setdogImage(data.message)
            console.log(data)
        })
        console.log("useEffect called")
    }, [])

    if(!dogImage) return <div><p>Loading</p></div>

  return (
    <div>
        <img src={dogImage} alt='A Random Dog'/>
    </div>
  )
}

export default App

