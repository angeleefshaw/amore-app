import React from "react";
import { Component } from "react";
import { ListGroup, Button, PageItem } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import API from "../../utils/API";

class Questions extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
    };
  }

  fetchQuestions = () => {
    API.getQuestion(this.props.topic).then((res) => {
      console.log(res);
      this.setState({
        questions: res.data,
      });
    });
  };

  componentDidMount() {
    this.fetchQuestions();
    console.log(this.state.questions);
  }

  handleSelection = (event) => {
    const { target } = event;
    const correct = target.getAttribute("data-correct") === "true";
    if (correct) {
      this.incrementScore();
    }
    this.incrementQuestionIndex();
  };

  incrementScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  incrementQuestionIndex = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });
  };

  handleSubmit = () => {
    const scoreDetails = {
      score: this.state.score,
      topic_id: this.props.topic,
    };

    console.log(scoreDetails);

    API.saveScores(scoreDetails).then((res) => {
      //api call to post score to databas and in the .then we have the below
      console.log(res);
      this.props.history.push("/scoreboard");
    });
  };

  render() {
    const { questions, currentQuestionIndex } = this.state;
    if (questions[currentQuestionIndex]) {
      return (
        <div className="mt-5 mb-5">
          <div className="mb-5">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <ListGroup>
              {questions[currentQuestionIndex].Answers.map((answer) => {
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
        </div>
      );
    } else if (questions.length > 0 && currentQuestionIndex > questions.length - 1) {
      return (
        <div className="mt-5 mb-5">
          <p>{this.state.score > 7 ? "Great job!" : "Nice try!"}</p>
          <p className="score-tag">Your Score is: {this.state.score}</p>

          <Button variant="outline-dark" onClick={this.handleSubmit}>
            Continue
          </Button>
        </div>
      );
    } else return null;
  }
}

export default withRouter(Questions);
