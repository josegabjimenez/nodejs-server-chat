import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const GoBackButton = () => {
	const history = useNavigate();

	return (
		<button className="btn fixed left-12 z-10" onClick={() => history(-1)}>
			<div className="text-accent text-xl">
				<IoIosArrowBack />
			</div>
			Go back
		</button>
	);
};

export default GoBackButton;
