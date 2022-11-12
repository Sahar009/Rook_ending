import React from "react"
import Awards from "./awards/Awards"

import Hero from "./hero/Hero"
import Location from "./location/Location"

import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      
      <Recent />
      <Awards />
      <Location />
      <Team />
      {/* <Price /> */}
    </>
  )
}

export default Home
