import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import bowl from "../faucet/images/bowl-01.svg"
import "../Bowl/bowl.css"
import whiteBg from "../faucet/images/whitebg2-01.svg"
import horball2 from "../faucet/images/hor2-02-01.svg"

const Bowl = () => {
  return (
    <div className='bowelContainer'>
        <div className="horContainer" >
        <Parallax className='hor2' translateY={[10, -100]}
        translateX={[0, 110]} scale={ [0.3, 0.2]}>
        <img src={horball2} alt=""/>
    </Parallax>
        </div>
  
    <Parallax>
        <img src={bowl} className="bowl" alt="" />
    </Parallax>
        <img src={whiteBg} className='whiteBg' alt=""/>
        <p className='end'>Thanks for watching!~</p>
    </div>
  )
}

export default Bowl