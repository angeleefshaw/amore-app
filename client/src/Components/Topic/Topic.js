import React from "react";
import API from "../../utils/API";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function Topic () {


//gets all questions for quiz by taking in topic id
  function getQuiz(id) {
    API.getQuestion(id)
    .then(res => 
      console.log(res)
      )
      .catch(err => console.log(err))
  };

  //Will need to loop through all questions, render one for each page?

  

return (
  <div>
    <div className = "quiz-btn-container">
    <Link to="/quiz/3">
          <button className="quiz-btn" onClick={() => getQuiz(2)}>
            React
          </button>
      </Link>
   
      <Link to="/quiz/2">
          <button className="quiz-btn" onClick={() => getQuiz(2)}>
            Node.js

            
          </button>
      </Link>
        
      <Link to="/quiz/1">
          <button className="quiz-btn" onClick={() => getQuiz(2)}>
            Javascript
          </button>
      </Link>

    </div>
    

</div>
)
}

export default Topic;