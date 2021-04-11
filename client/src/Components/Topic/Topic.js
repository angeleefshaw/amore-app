import React from "react";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Topic () {
return(
  <div>
    <div className = "quiz-btn-container">
    <Link to="/quiz/3">
          <Button className= "qz-btn" variant="outline-dark">
            React
          </Button>
      </Link>
   
      <Link to="/quiz/2">
          <Button className="qz-btn" variant="outline-dark"  >
            Node.js
          </Button>
      </Link>
        
      <Link to="/quiz/1">
          <Button className="qz-btn" variant="outline-dark" >Javascript</Button>
      </Link>

    </div>
    

</div>


)


}

export default Topic;