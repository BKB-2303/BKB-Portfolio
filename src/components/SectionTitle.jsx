import React from 'react';
import './Components.css'
function SectionTitle({ children, id }) {
	return (
		<h1
			id={id && id}
			className="text-3xl font-bold mb-5 text-green-400 blinking-text"
		>
			{children}
		</h1>
	);
}

export default SectionTitle;