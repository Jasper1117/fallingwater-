import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import bowl from "../faucet/images/bowl-01.svg"
import "../Bowl/bowl.css"
import whiteBg from "../faucet/images/whitebg2-01.svg"
import horball2 from "../faucet/images/endball-01.png"
import middleBall from "../faucet/images/endball2-01.png"

const Bowl = () => {
  return (
    <div className='bowelContainer'>
        <div className='bottomBall'>
        <Parallax className='hor2' translateY={[80, -100]}
        translateX={[10, 100]} scale={[0.7,-0.3]}>
        
        <img src={horball2} alt=""/>
    </Parallax>
    <Parallax scale={ [0.7, 0.3]} rotate={[0, 120]}  translateX={[10, 20]} translateY={[60, 130]}>
            <img src={middleBall} alt="" className='middleBall2' />
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