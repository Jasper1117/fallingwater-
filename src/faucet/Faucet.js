import React from 'react'
import { Parallax } from 'react-scroll-parallax';

import faucet from "../faucet/images/NewF-01.svg"
import water from "../faucet/images/NewnewWater.svg"
import ball1 from "../faucet/images/ball1_4.svg"
import ball2 from "../faucet/images/ball2-2.svg"
import ring1 from "../faucet/images/ringball-01.svg"
import "./faucet.css"

const Faucet = () => {

  return (
    <div className='container'>

    <div className="faucetContainer">
    <Parallax translateY={[-1900,5500]} opacity={[1,0.4]} scale={[0.9,-0.2]}>
        <img src={water} className="water" />
      </Parallax>
        <Parallax translateY={[10, -20]} >
        <img src={faucet} className="faucet" />
      </Parallax>
      </div>
        <Parallax scale={ [0.5, 0.7]}
        rotate={[0, -100]}
        opacity={[0.7,1]}
        >
          <img src={ball2} className="ball2" />
        </Parallax>
        <Parallax scale={ [0.28, 0.32]}
        rotate={[0, 10]}
        >
          <img src={ball1} className="ball1" />
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