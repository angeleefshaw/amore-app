import React from "react";
import Topic from "../Components/Topic/Topic";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import '../styles/main.css'


function Main () {
  return (
    <div className = "main">

     <a className = "view-score-link" href="/view-scores">High Scores</a>
      <Jumbotron/>
      <div className = "mainpage-quiz-intro-container">
        <p className ="mainpage-quiz-intro">
          Prepare for your interview by selecting a quiz below.
        </p>
      </div>

      <Topic/>
    </div>
  )
}

export default Main;