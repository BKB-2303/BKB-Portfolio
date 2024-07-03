import { MdPalette } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { FaMicrophone } from 'react-icons/fa'; // Stylish audio editing icon
import { FaMagic } from 'react-icons/fa'; // Stylish photo editing icon
import { SiFlutter } from 'react-icons/si'; // Add Flutter icon

export default [
    {
        title: 'UI Design⚡',
        icon: <MdPalette className="w-full h-full  text-indigo-500" />,
        description: 'Crafting intuitive and visually appealing user interfaces to enhance user experience and engagement.',
    },
    {
        title: 'Web Development⚡',
        icon: <VscCode className="w-full h-full" />,
        description: 'Creating interactive and responsive websites with modern technologies and frameworks.',
    },
    {
        title: 'Programming⚡',
        icon: <FaLaptopCode className="w-full h-full  text-yellow-500" />,
        description: 'Writing clean, efficient code to develop software applications that meet specific user needs and requirements.',
    },
    {
        title: 'Audio Editing⚡',
        icon: <FaMicrophone className="w-full h-full text-purple-500" />, // Stylish audio editing icon
        description: 'Editing and enhancing audio files for various purposes such as podcasts, videos, and music production.',
    },
    {
        title: 'Image Editing⚡',
        icon: <FaMagic className="w-full h-full text-red-500" />, // Stylish photo editing icon
        description: 'Manipulating and improving images using editing software to achieve desired visual outcomes.',
    },
	// {
	// 	title: 'Flutter Development⚡',
	// 	icon: <SiFlutter className="w-full h-full text-blue-500" />,
	// 	description: 'Building cross-platform mobile apps with Flutter for a seamless user experience.',
	// },
	
];
