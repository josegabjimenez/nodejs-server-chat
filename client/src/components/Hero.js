import React from 'react';

const Hero = ({ title, subtitle, children }) => {
	return (
		<main className="bg-base-100 w-full m-0 p-12 flex flex-col items-center rounded shadow-md">
			<p className="text-4xl font-bold m-4">{title}</p>
			<p className="text-1xl font-bold m-4">{subtitle}</p>
			{children}
		</main>
	);
};

export default Hero;
