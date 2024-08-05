import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import "./BmiCal.css"

function BMICal() {

    const[height,setHeight] = useState("")
    const[weight,setWeight] = useState("")
    const[bmi,setBmi] = useState("")
    const[bmiStatus,setBmiStatus] = useState("")

    const calculate = ()=>{

        const cal = (parseFloat(weight)/(height*height)).toFixed(2)

        setBmi(cal)

        if (cal < 18.5){
           setBmiStatus('Underweight');
          }
       
        else if (cal < 24.9) {
            setBmiStatus('Normal weight');
          } 
          
        else if (cal < 29.9) {
            setBmiStatus ('Overweight');
          } 
          
        else {
            setBmiStatus('Obesity');
          }
    }


  return (
    <div>
         <div>
            <h1 className='auth-heading'>You can calculate Your BMI 🡆</h1>

            <form className='auth-form'>
                <label htmlFor="weight" className='auth-form-heading'>Enter Weight:</label>
                <input
                    type='number'
                    id="weight"
                    placeholder='Weight'
                    className='user-input'
                    value={weight}
                    onChange={(e) => {
                        setWeight(e.target.value )
                    }}
                />
                    

                <label htmlFor="height" className='auth-form-heading'>Enter Height:</label>
                <input
                    type='number'
                    id="height"
                    placeholder='age'
                    className='user-input'
                    value={height}
                    onChange={(e) => {
                        setHeight(e.target.value )
                    }}
                />

                <div className='info-container'>
                    <p>BMI : {bmi}</p>
                    <p>Status : {bmiStatus}</p>
                </div>


                <button
                    type='button'
                    className='auth-btn'
                    onClick={calculate}
                    >
                    Calculate
                </button>
            </form>

            

            <Toaster />
        </div>
    </div>
  )
}

export default BMICal