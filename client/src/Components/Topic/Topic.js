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
return(
  <div>
    <div className = "quiz-btn-container">
    <Link to="/quiz/3">
          <button className="quiz-btn">
            React
          </button>
      </Link>
   
      <Link to="/quiz/2">
          <button className="quiz-btn" >
            Node.js

            
          </button>
      </Link>
        
      <Link to="/quiz/1">
          <button className="quiz-btn">
            Javascript
          </button>
      </Link>

    </div>
    

</div>


)


}

export default Topic;