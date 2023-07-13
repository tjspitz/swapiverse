# Getting started
Please fork or clone this repo if you'd like to inspect how it performs/renders. I developed per the instructions in the original README, and utilized Chrome Dev Tools' responsive viewing (iPhone XR) to inspect the app on a simulated mobile device.

### Installing packages
From root:

```bash
npm i
```
From ./src/swapi:

```bash
npm i
```

This additional install is necessary as I utilized a SWAPi wrapper library.
However, it was broken. So, I hacked it into my project in a way that allowed me to fix what was broken.
All credit to the library's original creator, Amit Choukroun, apart from the small fix that was needed.

#### Run App

```bash
npm start
```

#### Odds & Ends
- My goal was to make a fun, basic "travel" game.
- Due the SWAPI's propensity for having tons of planets with no "residents", I recommend
getting a feel for the app by selecting Naboo as your first destination.
After that, choose any you wish.
- Often, you will be redirected back to your origin planet since most SWAPI planets
do not have any "residents" that are associated with Starships.
- Please also note the "placeholder" images on each carousel as representative of each carousel card (not entirely accurate),
as SWAPI unfortunately does not provide image data for its various resources.
- That said, I still like the concept, and it would be much more fun if the plethora of planets all had resident-starship associations.
<hr>
The original README can be seen below, if you comment it back in via your editor.
<br>
<!--
# Inception Health React Coding Challenge

Using [Star Wars API](https://swapi.dev/documentation), create an _informative_ mobile app that _delights_ Star Wars fans! This will be your opportunity to showcase something you pride yourself on. This could be code organization, animation, testing, UX, UI, app performance, etc.

## Ideas
- Visualize a single Entity's details.
- Visualize Entity Relationships
- Search
- Rate Star Wars Characters
- Vehicle E-Commerce
- Planet Tourism Brochure
- Your own idea!

## Getting Started

### Use Template and Clone git repo

```bash
git clone git@github.com:{GH_USERNAME}/ih-web-challenge.git
```

### Local Development

This app follows the standard setup for [create-react-app](https://create-react-app.dev/docs/adding-typescript/) with typescript.

#### Run App

```bash
npm start
```

#### Test App

```bash
npm run test
```

#### UI Component Library

This project has pre-installed the [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion) library for convenience. It is not required to use this component library.

-->
