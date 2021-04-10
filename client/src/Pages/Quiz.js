import React from "react";
import Questions from "../Components/Questions/Questions";
import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/quiz.css";
import"../Components/Questions/Questions.css";


import { useParams } from 'react-router-dom';

function Quiz() {
	const { id } = useParams();
	console.log(id)
	return (
		<div className="main-page">
			<Container className="container">
				<Questions topic={id} />
			</Container>
			<Link to="/">
          <Button variant="outline-light" className="fixed-bottom ml-4 mb-4 button">Exit Quiz</Button>
        </Link>
		</div>
	);
}

export default Quiz;
