import React from 'react';

function WorkItem({ imgUrl, title, tech, workUrl }) {
	return (
		<a
			href={workUrl}
			target="_blank"
			rel="noreferrer"
			className="group bg-gradient-to-r from-stone-800 to-stone-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:-translate-y-2"
		>
			<div className="relative">
				<img
					src={imgUrl}
					alt="work"
					className="w-full h-36 md:h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"></div>
			</div>
			<div className="w-full p-5 text-gray-300 relative z-10">
				<h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-bold group-hover:text-yellow-400 transition-all duration-300 ease-in-out">
					{title}
				</h3>
				<p className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm">
					{tech.map(item => (
						<span
							key={item}
							className="inline-block px-2 py-1 bg-stone-950 rounded-md text-white transition-colors duration-300 ease-in-out group-hover:bg-green-400"
						>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

export default WorkItem;
