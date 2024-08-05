import React from 'react'
import BmiCal from './../../component/BmiCal/BmiCal.js'
import Navbar from "./../../component/Navbar/Navbar.js"

function BmiCalculator() {
  return (
    <div>
      <Navbar/>
        <BmiCal/>
    </div>
  )
}

export default BmiCalculator