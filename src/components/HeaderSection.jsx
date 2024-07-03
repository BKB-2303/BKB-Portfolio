import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function HeaderSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Web Developer | Passionate about enhancing user experience with intuitive design and seamless functionality. ";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
 

  
    const interval = setInterval(() => {
      currentText += fullText[currentIndex];
      setTypedText(currentText);
      currentIndex += 1;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [fullText]);

  const iconStyle = {
    color: 'white',
   
    transition: 'transform 0.3s',
   
  };

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const getHoverStyle = (icon) => {
    return {
      transform: hoveredIcon === icon ? 'scale(1.2)' : 'scale(1)',
      color: hoveredIcon === icon ? 'orange' : 'white',
    };
  };

  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-yellow-400 font-semibold font-dancing-script">
          <span className="text-4xl md:text-5xl">Hi !</span> This is Bikash Borah
        </h1>
   <p className={`text-2xl md:text-2xl max-w-md mb-3 text-white font-dancing-script ${isTypingComplete ? 'blinking-text' : ''}`}>
          {typedText}
        </p>
        <a
  href="#about me"
  className="inline-block px-3 md:px-5 py-3 md:py-4 border border-transparent text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium rounded-lg text-white bg-transparent hover:bg-transparent hover:text-orange-500 transition-colors"
>
  Connect⚡me⚡
</a>
        <div className="flex justify-center mt-4">
          <a href="https://www.linkedin.com/in/bikash-borah-36137724a"   target="_blank" className="mr-6" onMouseEnter={() => handleIconHover('linkedin')} onMouseLeave={handleIconLeave}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ ...iconStyle, ...getHoverStyle('linkedin') }} />
          </a>
          <a href="https://github.com/BKB-2303"   target="_blank" className="mr-6" onMouseEnter={() => handleIconHover('github')} onMouseLeave={handleIconLeave}>
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ ...iconStyle, ...getHoverStyle('github') }} />
          </a>
          <a href="https://instagram.com/bikash_bor_ah?igshid=YmMyMTA2M2Y="   target="_blank" className="mr-6" onMouseEnter={() => handleIconHover('instagram')} onMouseLeave={handleIconLeave}>
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ ...iconStyle, ...getHoverStyle('instagram') }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100068052742091&mibextid=D4KYlr"  target="_blank"  className="mr-6" onMouseEnter={() => handleIconHover('facebook')} onMouseLeave={handleIconLeave}>
            <FontAwesomeIcon icon={faFacebook} size="2x" style={{ ...iconStyle, ...getHoverStyle('facebook') }} />
          </a>
          <a href="#"   target="_blank" className="mr-6" onMouseEnter={() => handleIconHover('twitter')} onMouseLeave={handleIconLeave}>
            <FontAwesomeIcon icon={faTwitter} size="2x" style={{ ...iconStyle, ...getHoverStyle('twitter') }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
