import React from "react";
import {Card, CardDeck, Button} from "react-bootstrap";
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
  <CardDeck>
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Text>
        REACT
      </Card.Text>
      <Link to="/quiz/3">
        <Button variant="primary" onClick={() => getQuiz(1)}>Take the Quiz</Button>
      </Link>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Text>
        Node.js
      </Card.Text>
      <Link to="/quiz/2">
        <Button variant="primary" onClick={() => getQuiz(2)}>Take the Quiz</Button>

      </Link>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img />
    <Card.Body>
      <Card.Text>
        Javascript
      </Card.Text>
      <Link to="/quiz/1">
        <Button variant="primary" onClick={() => getQuiz(3)}>Take the Quiz</Button>

      </Link>
    </Card.Body>
  </Card>
</CardDeck>
)
}

export default Topic;