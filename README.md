# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://github.com/Marchino5791/Interactive-Rating](https://github.com/Marchino5791/Interactive-Rating)
- Live Site URL: [https://marchino5791.github.io/Interactive-Rating/](https://marchino5791.github.io/Interactive-Rating/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Google Fonts](https://fonts.google.com/) - For fonts
- [Font Awesome](https://fontawesome.com/) - For Icon

### What I learned

1) I practice with JavaScript and I have learned how to active one button at a time:

HTML: 

attribute onclick="btn_rate(1)"

JS: <br />

var indexValue = 1; <br />

function btn_rate(indexValue) { <br />
&emsp;  var buttonRate = document.querySelectorAll(".button-div .button"); <br />

&emsp;  for (var i = 0; i < buttonRate.length; i++) { <br />
&emsp;&emsp;      buttonRate[i].classList.remove("buttonClicked"); <br />
&emsp;  } <br />

&emsp;  buttonRate[indexValue-1].classList.add("buttonClicked"); <br />
} <br />

2) In CSS, I have learned how to center verticaly a div:

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

### Continued development

Improve my JavaScript skills.

### Useful resources

- [Image Slider with Controls using HTML CSS & JavaScript by CodingNepal](https://www.youtube.com/watch?v=LC9LkDXkn6k) - This video helped me to activate one button at a time.
- [Learn CSS Variables by Building a City Skyline by freeCodeCamp](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-css-variables-by-building-a-city-skyline/step-1) - This exercise help me with flexbox, particularly how to center vertically a div.

## Author

- Frontend Mentor - [@Marchino5791](https://www.frontendmentor.io/profile/Marchino5791)
- LinkedIn - [@Marco Antonio Paolino](https://www.linkedin.com/in/marco-paolino/)
