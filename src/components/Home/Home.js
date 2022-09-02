import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context'

function Home() {

  const name = useContext(AppContext);

  return (
    <div>
      <h1>home page {name}</h1>
    </div>
  )
}

export default Home;
