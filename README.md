# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: (https://github.com/Anar765/advice-generator-app)
- Live Site URL: (https://advice-generator-app-azure-seven.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I learned that my API call to `api.adviceslip.com` wasn’t returning fresh data because of browser caching. I fixed it by appending a unique query parameter using `?timestamp=${Date.now()}` to force the browser to fetch a new response each time.

## Author

- Gitub - (https://github.com/Anar765)
- Frontend Mentor - [@Anar765](https://www.frontendmentor.io/profile/Anar765)
