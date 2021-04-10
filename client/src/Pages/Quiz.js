import React from "react";
import Questions from "../Components/Questions/Questions";
import {Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";


import { useParams } from 'react-router-dom';

function Quiz() {
	const { id } = useParams();
	console.log(id)
	return (
		<div>
			<Container>
				<Questions topic={id} />
			</Container>
			<Link to="/">
          <Button className="fixed-bottom">Exit Quiz</Button>
        </Link>
		</div>
	);
}

export default Quiz;
