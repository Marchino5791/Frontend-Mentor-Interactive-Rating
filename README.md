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

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Google Fonts](https://fonts.google.com/) - For fonts
- [Font Awesome](https://fontawesome.com/) - For Icon

### What I learned

I practice with JavaScript and I have learned how to active one button at a time:

HTML:
<div class="button-div">
  <button class="button" name="rate" onclick="btn_rate(1)" type="button" value="1" required>1</button>
  <button class="button" name="rate" onclick="btn_rate(2)" type="button" value="2" required>2</button>
  <button class="button" name="rate" onclick="btn_rate(3)" type="button" value="3" required>3</button>
  <button class="button" name="rate" onclick="btn_rate(4)" type="button" value="4" required>4</button>
  <button class="button" name="rate" onclick="btn_rate(5)" type="button" value="5" required>5</button>
</div>

JS:
var indexValue = 1;
function btn_rate(indexValue) {
  var buttonRate = document.querySelectorAll(".button-div .button");
  for (var i = 0; i < buttonRate.length; i++) {
      buttonRate[i].classList.remove("buttonClicked");
  }
  buttonRate[indexValue-1].classList.add("buttonClicked");
}

In CSS, I have learned how to center verticaly a div:

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
