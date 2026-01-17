import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Exercise from './components/Exercise.jsx'
import Home from './components/Home.jsx'
import ExerciseLayout from './Layout/ExerciseLayout.jsx'
import TopicChange from './components/TopicChange.jsx'



function App() {

  const [selected, setSelected] = React.useState("")


  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/topicchange" element={<TopicChange/>}/>

      <Route element={<ExerciseLayout selected={selected} setSelected={setSelected}/>}>
      <Route path="/addition" element={<Exercise/>}/>
      <Route path="/multiplication" element={<Exercise/>}/>
      <Route path="/subtraction" element={<Exercise/>}/>
      </Route>
      

    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}


export default App
