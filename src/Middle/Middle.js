import React from 'react'
import middleBall from "../faucet/images/middleball-01.svg"
import { Parallax } from 'react-scroll-parallax';
import "../Middle/middle.css"

const Middle = () => {
  return (
    <div>
        <div className="workContainer">
        <Parallax  className="leftLorem" opacity={[0.5,1]} scale={[0.9,1]}>
            <h2>Lorem, ipsum dolor.</h2>
            <p className="leftLoremP">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati inventore blanditiis officia quia aliquid aliquam, magni quaerat fugiat mollitia ullam molestiae accusamus repellendus enim laboriosam nemo cumque maxime minima. Ea.
            Culpa fugit blanditiis ex sapiente nulla quos, explicabo alias delectus asperiores sequi, quas deserunt. Et enim repellendus iusto nisi illum magni magnam ut expedita aut est eius, quis culpa in.</p>
        </Parallax>
        <br />
        <br />
        <Parallax  className="rightLorem" opacity={[0.5,1]} scale={[0.9,1]}>
            <h2>Lorem ipsum, dolor sit consectetur.</h2>
            <p className='rightLoremP'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati inventore blanditiis officia quia aliquid aliquam, magni quaerat fugiat mollitia ullam molestiae accusamus repellendus enim laboriosam nemo cumque maxime minima. Ea.
            Culpa fugit blanditiis ex sapiente nulla quos, explicabo alias delectus asperiores sequi, quas deserunt. Et enim repellendus iusto nisi illum magni magnam ut expedita aut est eius, quis culpa in. alias delectus asperiores sequi, qu</p>
        </Parallax>
        </div>
        

    </div>
  )
}

export default Middle