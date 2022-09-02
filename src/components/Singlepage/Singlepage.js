import React from 'react'
import {useParams}  from "react-router-dom"

function Singlepage() {

    const { movieid } = useParams();

  return (
    <div>
      <h1>hello this is movie id : {movieid}</h1>
    </div>
  )
}

export default Singlepage;
