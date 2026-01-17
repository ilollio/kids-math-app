import React from "react";
import { Link } from "react-router-dom"
import Lottie from "lottie-react";
import walkingman from "../assets/walkingman.json"

console.log(walkingman)






export default function Home (){


    return(
        <>
        <div className="home-container">
        
        <div className="header-container">
       
        <div className="header-animation">
            <span>Hello</span>
            <Lottie
                    animationData={walkingman}
                    loop
                    autoplay
                    style={{  }}
                    className="animation-walking-man"/>
        </div>
        <h1>How would you like to start your practise today?</h1>
        </div>
        
        <div className='links-container'>

            <Link className='link' to="/addition">ADDITION</Link>
            <Link className='link' to="/multiplication">MULTIPLICATION</Link>
            <Link className='link' to="/subtraction">SUBTRACTION</Link>
        </div>

        </div>
        </>
    )
}