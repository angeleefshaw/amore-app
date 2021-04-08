import React from 'react';
import Questions from '../Components/Questions/Questions';
import Container from 'react-bootstrap/Container';

import { useParams } from 'react-router-dom';

function Quiz() {
	const { id } = useParams();
	return (
		<div>
			<Container>
				<Questions topic={id} />
			</Container>
		</div>
	);
}

export default Quiz;
