# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](https://github.com/tricksap/ip-tracker/blob/60b3250280fb9276dac2161eb0c51ed6a72a23fc/Screenshot/FireShot%20Capture%20001%20-%20React%20App%20-%20localhost.png)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS custom properties
- Flexbox
- Javascript 
- [Node.Js](https://nodejs.org/en/)
- [Express](https://expressjs.com/) -JS Library 

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
```js
function createPost(e) {
    axios
      .post("http://localhost:3001/", { address: address })
      .then((response) => {
        props.onAdd({
          Add: response.data.ip,
          Loc: response.data.location.city,
          TimeZone: response.data.location.timezone,
          Isp: response.data.isp,
          Lat: response.data.location.lat,
          Long: response.data.location.lng,
        });
      });
    e.preventDefault();
  }
}
```

### Continued development
Fix the Leaflet part of the program

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [React Leaftet](https://react-leaflet.js.org/) - This help me integrate leaflet to the react app
- [IP Geolocation API](https://geo.ipify.org/) - Help me get the Ip Address Information

## Author
- Github - [tricksap](https://github.com/tricksap)
