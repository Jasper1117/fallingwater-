import React,{useState} from 'react'
import { Parallax } from 'react-scroll-parallax';

import faucet from "../faucet/images/NewF-01.svg"
import water from "../faucet/images/NewnewWater.svg"
import ball1 from "../faucet/images/Ball1_4.png"
import ball2 from "../faucet/images/Ball2_New2-01.png"
import ring1 from "../faucet/images/Newringball-01.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./faucet.css"

const Faucet = () => {
  // const [transY, setTransY]=useState([-16000, 47000]);
  // const withChange =()=>{
  //   if (window.innerWidth<1800){
  //     setTransY=[-19000, 47000];
  //   }
  //   else{
  //     setTransY=[-20000, 47000];
  //   }
  // }

  return (
    <div className='container'>

    <div className="faucetContainer">
      <Parallax translateY={[-16000,47000]} opacity={[1,0]} scale={[0.9,0.1]}>
        <LazyLoadImage src={water} className="water" alt=""/>
      </Parallax>
        <Parallax translateY={[10, -20]} >
        <LazyLoadImage src={faucet} className="faucet" alt=""/>
      </Parallax>
      </div>
      <div className="ball">
        <Parallax scale={ [0.9, 0.1]}
       
   
        >
          <LazyLoadImage src={ball2} className="ball2" alt=""/>
      </Parallax>
      <Parallax scale={ [0.55, 0.3]}
        rotate={[120, 0]}
        >
          <LazyLoadImage src={ball1} className="ball1" alt=""/>
      </Parallax>
      </div>
     
       <div className="ring">
      <Parallax rotate={[100, 10]} scale={ [0.7, 0.9]} className="ring1">
         <LazyLoadImage src={ring1} alt="" />
      </Parallax>

       </div>
    </div>
)
}

export default Faucet