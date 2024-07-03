import React from 'react';

function Footer() {
	return (
		<div className="py-5 text-center text-green-500 rounded-t-lg">
			<a href="#hero" className="block text-xl md:text-2xl font-semibold font-dancing-script ">
				Bikash Borah
			</a>
		
			<p className="text-xs mt-2 text-gray-100 blinking-text">
            Copyright © BKB {new Date().getFullYear()}. All Rights Reserved
			</p>
		</div>
	);
}

export default Footer;
