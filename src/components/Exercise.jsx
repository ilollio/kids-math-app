import React from "react";
import {useOutletContext} from "react-router-dom";
import { motion } from "framer-motion";

/*Fix mobile version
Fix point counting
Fix Text with giraffe*/ 


export default function Exercise ({}){

    const {exercise, 
            selected, 
            displayNum, 
            correctAnswer, 
            thinkingRobot, 
            celebratingGiraffe, 
            meditatingFox,
            catPeeping,
            isCorrect,
            points} = useOutletContext()
    if (!exercise) return null 

console.log("ex ran")

    return(
        <>
        
       <div className="exercise-container">

            
        <div className="exercise-main">
        
                 {isCorrect===false &&<div className="correct-answer-container">
                    
                    <span className="correct-answer-span">Correct Answer:</span>
                    
                        <motion.p
                        className="correct-answer-p"
                        key={correctAnswer}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        }}>
                        {correctAnswer}</motion.p>

                    <div className="cat-peeping-container">

                        {catPeeping}

                    </div>
                        
                    </div>}
                        
                    
                    

            <div className="question-container">

                <div className="inline-container">

                    {isCorrect === null && <div className="question">
                    <motion.p
                        className="motion-p"
                        key={exercise.question}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        }}>
                        {exercise.question}<span className="question-span"> = </span> 
                    </motion.p>
                    </div>}

                    {isCorrect === null &&<div className="thinking-robot-container">

                            {thinkingRobot}

                    </div>}
                    
                    {isCorrect===true&&<div className="right-answer-container">

                    <span className="right-answer-span">Amazing!</span>

                    <div className="giraffe-container">
                    
                    {celebratingGiraffe}

                    </div>
                

                    </div>}
                
                
                </div>


            </div>

            {isCorrect===null&&<div className="answer-container">
                <motion.p
                        key={selected}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        }}>
                    {selected}
                </motion.p>
            </div>
}
            
            <div className="numbers-container">
            {displayNum}
            </div>


        </div>

            {isCorrect===true&&<div className="points-container">

                <div className="points-container-p">

                    <p ><span className="points-span">{points}</span> of 10</p>

                </div>

                    <motion.p
                        className="points"
                        key={points}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                        }}>
                    {points}
                </motion.p>
    

        </div>}
            
            </div>

       
        
        </>
    )
}