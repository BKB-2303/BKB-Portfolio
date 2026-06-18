import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import myImg from '../images/BKB.jpg';
import SectionTitle from './SectionTitle';
import './Components.css';

function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
            <div className="w-full md:w-6/12">
                <SectionTitle id="about me">About Me</SectionTitle>
<p className="text-md text-white mb-4">
    I have done my B.Tech degree in Computer Science and Engineering from{" "}
    <a
        href="https://jecassam.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md md:text-lg text-green-500 no-underline hover:text-orange-500"
    >
        Jorhat Engineering College
    </a>
    . Currently, I am working as a{" "}
    <span className="text-green-500">Senior Engineer</span> in the{" "}
    <span className="text-green-500">Information Technology Department</span> at{" "}
    <a
        href="https://bcplonline.co.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 no-underline hover:text-orange-500"
    >
        Brahmaputra Cracker and Polymer Limited (BCPL)
    </a>
    . My passion lies in creating intuitive and user-friendly web applications.
    I thrive on challenges and am always eager to learn and implement new technologies.
    In my free time, I enjoy exploring new coding techniques, contributing to
    open-source projects, and staying up-to-date with the latest trends in technology.
</p>

                <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-orange-500"
                    />
                    <p className="text-md text-white">
                        <span className="text-green-500">Digboi</span>, Tinsukia, Assam, India
                    </p>
                </div>

                <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-orange-500"
                    />
                    <a
                        href="mailto:borahbikash2303@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md md:text-lg text-white no-underline hover:text-green-500"
                    >
                        borahbikash2303@gmail.com
                    </a>
                </div>
            </div>

            <img
                src={myImg}
                alt="BKB"
                className="w-48 h-48 md:w-6/12 md:h-auto rounded-full object-cover opacity-75"
            />
        </div>
    );
}

export default About;