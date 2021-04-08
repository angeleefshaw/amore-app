import React from "react";
import { Component } from "react";
import {ListGroup, Button} from "react-bootstrap";
import API from "../../utils/API";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
    };
  }

  fetchQuestions = () => {

    API.getQuestion(this.props.topic).then((res) => {
      console.log(res) 
      this.setState({
        questions: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchQuestions();
    console.log(this.state.questions)
  }

  handleSelection = (event) => {
    const { target } = event;
    if (!target.parentElement.disabled) {
      const correct = target.getAttribute("data-correct") === "true";
      if (correct) {
        target.classList.add("list-group-item-success");
        this.incrementScore();
      } else {
        target.classList.add("list-group-item-danger");
      }
      target.parentElement.disabled = true;
    }
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  handleSubmit = () => {
    console.log(this.state.score);
    // call api endpoint to store the score in the database
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question, index) => {
          return (
            <div key={index}>
              <h2>{question.question}</h2>
              <ListGroup>
                {question.Answers.map((answer) => {
                  return (
                    <ListGroup.Item
                      key={answer.id}
                      data-correct={answer.correct}
                      onClick={this.handleSelection}
                    >
                      {answer.answer}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </div>
          );
        })}
        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
        <p>{this.state.score}</p>
      </div>
    );
  }
}

export default Questions;
