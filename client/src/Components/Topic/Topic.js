import React from "react";
import {Card, CardDeck, Button} from "react-bootstrap";

function Topic () {
return (
  <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Text>
        REACT
      </Card.Text>
      <Button href="/quiz/3" variant="primary">Take the Quiz</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Text>
        Node.js
      </Card.Text>
      <Button href="/quiz/2" variant="primary">Take the Quiz</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Text>
        Javascript
      </Card.Text>
      <Button href="/quiz/1" variant="primary">Take the Quiz</Button>
    </Card.Body>
  </Card>
</CardDeck>
)
}

export default Topic;