import React, { useState } from 'react';
import "./style.css";

const ProgressBar = ({ width: inputWidth }) => {
    return (
      <div>
        <div className="container">
            <div className="innerContainer" style={{ width: '100%' }}>
              100%
            </div>
        </div>
      </div> 
    );
  };

export default function Boton() {


    return (
        <>
            <div className="App">
            <h1>Progress bar</h1>
            <ProgressBar />
            <form>
                <label htmlFor="percentage">Input Percentage:</label>
                <input value="percentage" type="number"/>
            </form>
            </div>
        </>
       
    )
  }
  
