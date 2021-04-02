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

    API.getQuestion(this.props.topic).then((res) => { console.log (res)});
    // Query the endpoint and return the questions array and set it into state.
    // Instead for now, we are populating mock data from a simple JSON structure.
    const questions = [
      {
        question: "What is 2+2?",
        id: 1,
        answers: [
          {
            id: 1,
            answer: "4",
            correct: true,
          },
          {
            id: 2,
            answer: "6",
          },
          {
            id: 3,
            answer: "8",
          },
          {
            id: 4,
            answer: "3",
          },
        ],
      },
      {
        question: "What is 4+2?",
        id: 2,
        answers: [
          {
            id: 5,
            answer: "6",
            correct: true,
          },
          {
            id: 6,
            answer: "8",
          },
          {
            id: 7,
            answer: "9",
          },
          {
            id: 8,
            answer: "3",
          },
        ],
      },
    ];

    this.setState({
      questions,
    });
  };

  componentDidMount() {
    this.fetchQuestions();
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
    console.log(this.state.score)
  }

  render() {
    return (
      <div>
        {this.state.questions.map((question) => {
          return (
            <div key={question.id}>
              <h2>{question.question}</h2>
              <ListGroup>
                {question.answers.map((answer) => {
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
      </div>
    );
  }
}

export default Questions;
