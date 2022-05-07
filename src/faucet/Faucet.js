import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import faucet from "../faucet/images/NewF-01.svg"
import water from "../faucet/images/NewnewWater.svg"
import ball1 from "../faucet/images/Ball1_4.png"
import ball2 from "../faucet/images/Ball2_New2-01.png"
import ring1 from "../faucet/images/ringball-01.png"
import "./faucet.css"

const Faucet = () => {

  return (
    <div className='container'>

    <div className="faucetContainer">
      <Parallax translateY={[-2100,5500]} opacity={[1,0.4]} scale={[0.9,-0.2]}>
        <img src={water} className="water" alt=""/>
      </Parallax>
        <Parallax translateY={[10, -20]} >
        <img src={faucet} className="faucet" alt=""/>
      </Parallax>
      </div>
        <Parallax scale={ [0.5, 0.7]}
        rotate={[0, -100]}
        opacity={[0.7,1]}
        >
          <img src={ball2} className="ball2" alt=""/>
      </Parallax>
      <Parallax scale={ [0.8, 0.3]}
        rotate={[120, 0]}
        >
          <img src={ball1} className="ball1" alt=""/>
      </Parallax>
     
     
      <Parallax scale={ [1, 0.6]}
        opacity={[1,0]}
        >
      <h1 >Scroll</h1>
      </Parallax>
       <div className="ring">
      <Parallax rotate={[90, 300]} scale={ [0.5, 0.9]} className="ring1">
         <img src={ring1} alt="" />
      </Parallax>

       </div>
    </div>
)
}

export default Faucet