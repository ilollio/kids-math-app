
import Lottie from "lottie-react";
import { Link } from "react-router-dom"
import meditatingfox from "../assets/meditatingfox.json"



export default function TopicChange(){

    const meditatingFox = <Lottie
            animationData={meditatingfox}
            loop
            autoplay
            className="meditating-fox"/>

    return(
        <>
        <div className="topic-change-page">

            {meditatingFox}
        
        <div className="links-container">
            <Link className='link' to="/addition">ADDITION</Link>
            <Link className='link' to="/multiplication">MULTIPLICATION</Link>
            <Link className='link' to="/subtraction">SUBTRACTION</Link>
        </div>
        

        </div>
        </>
    )
}