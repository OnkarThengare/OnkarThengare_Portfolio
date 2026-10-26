import React from 'react';

// Authentic Official Icons provided by User in src/assets
import reactIcon from '../assets/React Atom Logo in Cyan.png';
import jsIcon from '../assets/JavaScript Logo on Transparent Background.png';
import tailwindIcon from '../assets/Tailwind CSS Cyan Wave Logo.png';
import html5Icon from '../assets/HTML5 Shield Logo on Transparent Background.png';
import css3Icon from '../assets/CSS3 Blue Shield Emblem.png';
import javaIcon from '../assets/Java Coffee Cup Logo.png';
import springbootIcon from '../assets/Spring Boot Power Badge.png';
import springIcon from '../assets/Spring Framework Leaf Logo.png';
import hibernateIcon from '../assets/Isometric Gold and Slate Hexagon Logo.png';
import mysqlIcon from '../assets/MySQL Dolphin Logo on Transparency.png';
import gitIcon from '../assets/Git Logo on Transparent Checkerboard.png';
import postmanIcon from '../assets/Postman Logo on Transparent Background.png';

const logoMap = {
  react: reactIcon,
  javascript: jsIcon,
  js: jsIcon,
  tailwindcss: tailwindIcon,
  tailwind: tailwindIcon,
  html5: html5Icon,
  html: html5Icon,
  css3: css3Icon,
  css: css3Icon,
  java: javaIcon,
  springboot: springbootIcon,
  spring: springIcon,
  springframework: springIcon,
  hibernate: hibernateIcon,
  mysql: mysqlIcon,
  sql: mysqlIcon,
  git: gitIcon,
  postman: postmanIcon
};

export function TechLogo({ name, className = "w-11 h-11" }) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const iconSrc = logoMap[key];

  if (iconSrc) {
    return (
      <img 
        src={iconSrc} 
        alt={name} 
        className={`${className} object-contain transition-transform duration-300 pointer-events-none select-none`} 
        loading="lazy" 
      />
    );
  }

  return (
    <div className={`${className} rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export {
  reactIcon,
  jsIcon,
  tailwindIcon,
  html5Icon,
  css3Icon,
  javaIcon,
  springbootIcon,
  springIcon,
  hibernateIcon,
  mysqlIcon,
  gitIcon,
  postmanIcon
};
