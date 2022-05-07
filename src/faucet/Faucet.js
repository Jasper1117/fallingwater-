import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import faucet from "../faucet/images/NewF-01.svg"
import water from "../faucet/images/NewnewWater.svg"
import ball1 from "../faucet/images/Ball1_4.png"
import ball2 from "../faucet/images/Ball2_New2-01.png"
import ring1 from "../faucet/images/Newringball-01.png"
import "./faucet.css"

const Faucet = () => {

  return (
    <div className='container'>

    <div className="faucetContainer">
      <Parallax translateY={[-16000,47000]} opacity={[1,0]} scale={[0.9,-0.6]}>
        <img src={water} className="water" alt=""/>
      </Parallax>
        <Parallax translateY={[10, -20]} >
        <img src={faucet} className="faucet" alt=""/>
      </Parallax>
      </div>
      <div className="ball">
        <Parallax scale={ [1, 0.1]}
        rotate={[0, 100]}
   
        >
          <img src={ball2} className="ball2" alt=""/>
      </Parallax>
      <Parallax scale={ [0.7, 0.3]}
        rotate={[120, 0]}
        >
          <img src={ball1} className="ball1" alt=""/>
      </Parallax>
      </div>
     
      <Parallax scale={ [1, 0.2]}
        opacity={[1,0]}
        className="scroll"
        >
      <h1 >Scroll</h1>
      </Parallax>
       <div className="ring">
      <Parallax rotate={[100, 10]} scale={ [0.7, 0.9]} className="ring1">
         <img src={ring1} alt="" />
      </Parallax>

       </div>
    </div>
)
}

export default Faucet