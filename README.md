# Bar.io Frontend

A React-based frontend for the Bar.io app. Bar.io was built under two weeks as the final software engineering project for Makers Academy in London.

To learn more about the idea behind Bar.io and how it works, you can view our [Final Presentation](https://docs.google.com/presentation/d/e/2PACX-1vTTYLB9d6gT8pyDuFgiDxTzTHwZWLJv09X4ef-chxh1mP6jajOv99bmqAf04h3b8G6Tdut1BYvTaxgt/pub?start=true&loop=false&delayms=30000).

## Table of Contents

- [Stack](#stack)
- [Usage](#usage)
- [Team](#team)

## [Stack](https://github.com/s-palmer/barrio-frontend#stack)

| Logo | Tool | Use | Where is it used? |
| ---------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| <img src="public/images/react.png" height="auto" width="50"> | [ReactJS](https://reactjs.org/) | ReactJS is a front-end JavaScript library for building user interfaces based on UI components. | Frontend built using ReactJS. |
| <img src="public/images/node.png" height="auto" width="50">  | [Node](https://nodejs.org/en/) | NodeJS is a back-end JavaScript runtime environment | [Backend Repo](https://github.com/s-palmer/barrio-backend) |
| <img src="public/images/express.png" height="auto" width="50"> | [ExpressJS](https://expressjs.com/) | ExpressJS is a fast, unopinionated, minimalist web framework for Node.js | [Backend Repo](https://github.com/s-palmer/barrio-backend) |
| <img src="public/images/material.png" height="auto" width="50"> | [MUI](https://mui.com/) | MaterialUI is a React component library. | Components on Frontend. |
| <img src="public/images/heroku.png" height="auto" width="50"> | [Heroku](https://www.heroku.com/) | Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. | Live deployment.

## [Usage](https://github.com/s-palmer/barrio-frontend#usage)

## Pre-Requisites

### Google Cloud API key.
- Register for free [here](https://cloud.google.com/).
- Required APIs to enable:
* Geocoding
* Places
* Maps JavaScript API

### Environment Variables

In a .env file:

- REACT_APP_PLACES_API_KEY=[GOOGLE_CLOUD_API_KEY]
- REACT_APP_TEST_API_POST_URL=(Link to [backend server](https://github.com/s-palmer/barrio-backend) using /bars endpoint)
- REACT_APP_DIR_URL=https://www.google.com/maps/dir/?api=1&destination=

## Quickstart

Clone this repository. Then:

```bash
> npm install
> npm start
```
> Runs the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view.

## [Team](https://github.com/s-palmer/barrio-frontend#team)

* Sergei - [Github](https://github.com/s-palmer)
* Tim - [Github](https://github.com/TTurvey)
* Matt - [Github](https://github.com/Matt-Warnock)
* Tania - [Github](https://github.com/Pinkish-Warrior)
