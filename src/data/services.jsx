import { MdPalette } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { FaMagic } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

export default [
    {
        title: 'UI Design⚡',
        icon: <MdPalette className="w-full h-full text-indigo-500" />,
        description: 'Crafting intuitive and visually appealing user interfaces to enhance user experience and engagement.',
    },
    {
        title: 'Web Development⚡',
        icon: <VscCode className="w-full h-full" />,
        description: 'Creating interactive and responsive websites with modern technologies and frameworks.',
    },
    {
        title: 'Programming⚡',
        icon: <FaLaptopCode className="w-full h-full text-yellow-500" />,
        description: 'Writing clean, efficient code to develop software applications that meet specific user needs and requirements.',
    },
    {
        title: 'App Development⚡',
        icon: <SiFlutter className="w-full h-full text-blue-500" />,
        description: 'Building cross-platform mobile applications using Flutter to deliver seamless and high-performance user experiences.',
    },
    {
        title: 'Image Editing⚡',
        icon: <FaMagic className="w-full h-full text-red-500" />,
        description: 'Manipulating and improving images using editing software to achieve desired visual outcomes.',
    },
];