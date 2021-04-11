import React from "react";
import { Component } from "react";
import {ListGroup, Button, PageItem} from "react-bootstrap";
import { withRouter } from "react-router-dom"; 
import API from "../../utils/API";

class Questions extends Component {
  constructor(props) {
    console.log(props);
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
    const scoreDetails = {
      score: this.state.score,
      //un comment when the db includes topic_id
      topic_id: this.props.topic
      // username;
    };

    console.log(scoreDetails);
  
     API.saveScores(scoreDetails).then((res) => { 
      //api call to post score to databas and in the .then we have the below
      console.log(res);
      this.props.history.push("/scoreboard");
    });
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        {this.state.questions.map((question, index) => {
          return (
            <div key={index} className="mb-5">
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
         <p className="score-tag">Your Score is :{this.state.score}</p>
          <Button variant="outline-dark" onClick={this.handleSubmit}>Submit</Button>
       
      </div>
    );
  }
}


export default withRouter(Questions);
