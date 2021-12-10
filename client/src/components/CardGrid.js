import React from 'react';

const CardGrid = ({ children }) => {
	return (
		<section className="grid gap-3 xl:gap-5 w-full grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
			{children}
		</section>
	);
};

export default CardGrid;
