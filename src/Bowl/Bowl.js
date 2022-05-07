import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import bowl from "../faucet/images/bowl-01.svg"
import "../Bowl/bowl.css"
import bg from "../faucet/images/Bg3-01.png"
import whiteBg from "../faucet/images/whitebg2-01.svg"
import horball1 from "../faucet/images/hor1-01.svg"
import horball2 from "../faucet/images/hor2-01.svg"

const Bowl = () => {
  return (
    <div className='bowelContainer'>
        <div className="horContainer" >
        <Parallax className='hor2' translateY={[-50, 50]}
        translateX={[-40, 20]} scale={ [1, 0.7]}>
        <img src={horball2} alt="" />
    </Parallax>
        </div>
  
    <Parallax>
        <img src={bowl} className="bowl" />
    </Parallax>
        <img src={whiteBg} alt="" className='whiteBg'/>
        <p className='end'>Thank for watching!~</p>
    </div>
  )
}

export default Bowl