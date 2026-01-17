import { Link, Outlet, useLocation } from "react-router-dom"
import Lottie from "lottie-react";
import React from "react"
import BouncyButton from "../components/BounceButton"
import thinkingrobot from "../assets/thinkingrobot.json"
import celebratinggiraffe from "../assets/celebratinggiraffe.json"
import meditatingfox from "../assets/meditatingfox.json"
import catpeeping from "../assets/catpeeping.json"
import { motion } from "framer-motion";
import moodygiraffe from "../assets/moodygiraffe.json"
import basketball from "../assets/playbasketball.json"



export default function ExerciseLayout({selected, setSelected}){




const [isCorrect, setIsCorrect] = React.useState(null)

const [correctAnswer, setCorrectAnswer] = React.useState("")

const [exercise, setExercise] = React.useState(null)

const [points, setPoints] = React.useState(0)

const [goalPoints, setGoalPoints] = React.useState(false)
console.log(points)
console.log(isCorrect)



function generateExercise(type) {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  let op
  if(type === "addition"){op = "+"}
  if(type === "multiplication"){op = "*"}
  if(type === "subtraction"){op = "-"}
  

  const question = `${a} ${op} ${b}`;
  const answer = eval(question);

  return { type, question, answer };
}

const numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"]

const handleInput = (num) => {
    setSelected((prev)=>prev + num)
}

React.useEffect(() => {


  const handleKeyDown = (e) => {

    if (numbersArr.includes(e.key)) {
      handleInput(e.key);
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);


const location = useLocation()

React.useEffect(()=>{
    setSelected("")


    if (location.pathname.includes("addition")) {
    setExercise(generateExercise("addition"))
  }
  if (location.pathname.includes("multiplication")) {
    setExercise(generateExercise("multiplication"))
  }
  if (location.pathname.includes("subtraction")) {
    setExercise(generateExercise("subtraction"))
  }

},[location.pathname])

React.useEffect(()=>{
    if (isCorrect){
        setPoints(prev => prev + 1)
    }
}, [isCorrect])

React.useEffect(()=>{
    if(!points)return;

    if(points === 10){
        setGoalPoints(true)
    }
}, [points])




function checkAnswers(){

    const userAnswer = Number(selected)
    const correct = exercise.answer === userAnswer

    setIsCorrect(correct)
    if(!correct){setCorrectAnswer(exercise.answer)}

}

function nextQuestion (){

    setExercise(generateExercise(exercise.type))
    setSelected("")
    setIsCorrect(null)
    setCorrectAnswer("")
}

function deleteNum(){
    setSelected(prev => prev.slice(0, -1))
}


const displayNum = numbersArr.map(num=>{
    return <BouncyButton key={num} onClick={()=> handleInput(num)}>{num}</BouncyButton>
})



const thinkingRobot =  isCorrect===null && <Lottie
            animationData={thinkingrobot}
            loop
            autoplay
            className="thinking-robot"/>

const celebratingGiraffe = isCorrect===true && <Lottie
                            animationData={moodygiraffe}
                            autoplay
                            loop
                            className="celebrating-giraffe"/>

const meditatingFox = isCorrect === false && <Lottie
            animationData={meditatingfox}
            loop
            autoplay
            className="meditating-fox"/>

const catPeeping = isCorrect === false && <Lottie
            animationData={catpeeping}
            loop={false}
            autoplay
            className="cat-peeping"/>

const playBasketball = goalPoints === true && <Lottie
            animationData={basketball}
            loop
            autoplay
            className="play-basketball"/>



    return(
        <>
        <div className="exercise-page">


       
        {goalPoints===false&&<div className="link-and-buttons">

            <div className="link-container">
                
                <Link className="link-another-topic" to="/topicchange">CHOSE ANOTHER TOPIC</Link>

            </div>

            <div className="button-container">

             
            
            <BouncyButton onClick={deleteNum}>DELETE</BouncyButton>
            <BouncyButton onClick={checkAnswers}>CHECK ANSWER</BouncyButton>
            <BouncyButton onClick={nextQuestion}> NEXT QUESTION</BouncyButton>

            </div>

        </div>
}
        
        {goalPoints===false&&<div className="exercise">

            <Outlet context={{exercise,
                        selected,
                        setSelected,
                        isCorrect,
                        correctAnswer,
                        displayNum, 
                        thinkingRobot, 
                        celebratingGiraffe, 
                        meditatingFox, 
                        catPeeping,
                        points
                          
        }}/>

        </div>}

        {goalPoints===true&&<div className="goal-container">
            <motion.h4  
                    className="goal-h4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    }}>
                    You have reached your goal!
            </motion.h4>

            <div className="basketball-container">
            
            {playBasketball}

            </div>

            <div className="link-to-continue-container">

            <Link className="link-to-continue" to="/topicchange">CONTINUE</Link>

            </div>

            
        </div>}

        
        
        </div>
        </>
    )
}