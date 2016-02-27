# Strtrkt – because I’m too cool for vowels
A semi-opinionated starting point for building multi-purpose apps with Universal React and interoperable, component-specific CSS. I use this as a starting point for building apps where I want to develop my ‘marketing sites’ in the same app as my actual application. Because I’m lazy and sharing components is good for life.

This is heavily based on [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) and literally all credit should go over dem ways.

React Isomorphic Starterkit Copyright © 2015, Rick Wong

Also big smooches to [Iest](https://github.com/iest) for help with webpack’s magic fuckery.

## Concepts and stuff
Take a look at [LEARN.md](https://github.com/scott-riley/strtrkt/blob/master/LEARN.md) to get a basic overview of the setup here.

## Features

- All the great stuff from [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) including:
  - Simple koa server for universal rendering
  - ES2015 + ES7 love with Babel
  - Hot Module Reload
- Heroku-ready for production deployment (almost, needs work)
- Automatic gzip on server
- Component-specific, namespaced CSS
- Separation of ‘marketing’ site and application out-of-the-box
- Convention for global Components for sharing between app and site
- Lost Grid support because it just makes sense
- Global CSS examples for sharing variables and modifiers between components
- IK blue so everyone knows you’re a creative startup!!

## Why is ur CSS so fuckin weird?
It’s nice to me. It makes sense to my brain. You might hate it. That’s cool too.

I could write thousands of words on this; but Glen Maddern’s article on [Interoperable CSS](http://glenmaddern.com/articles/interoperable-css) is just perfect x

## Yeah but what is it m8?
In short: you write CSS that is specific to a component. This CSS gets automatically namespaced for that component and rarely gets used elsewhere. This doesn’t completely fix cascade issues but it definitely mitigates them.

It doesn’t stop you writing ‘global’, non-namespaced CSS, and it definitely doesn’t remove the need for global-scoped styles and variables; it just means:

- You rarely have to mangle the cascade to override styles you’ve already set
- Your components have their own styles so you’re not combing through selectors to find the one line you need to change to make something red instead of blue.
- Small components are as portable as you want them to be, as their CSS is always ‘just enough’ to style the component
- Your CSS classes becomes close-to-immutable without having to maintain your namespacing yourself
- You don’t have to keep thinking of creative things to name your ‘sub’ component classes because some other component is using that class. E.g. you can have a `.primary` selector in a `Btn` component that is totally different to a `.primary` selector in a `FlashMessage` component.
- You can forget about BEM. Forever.

## Installation

I’m still working on getting this production-ready. I don’t recommend using it for production apps as there’s a few remaining issues, specifically with webpack file loading, that mean this is probably not quite ready for full-scale apps.

If you do wanna fuck around, and sort your own loaders for things like images, svgs and fonts, go for it!

Clone the repo then:

```bash
npm install
npm run watch
```

## Usage

Run `npm run watch` in terminal. Try changing any of the example Components or Containers. Add your own Component with its own CSS file and include it in one of the parent components. See if you think modular CSS is all lovely and stuff.

## Production

If you want to test for production:

```bash
npm run build
npm run start
```

or if you ever need to explicitly set the Node env:

```bash
npm run build
NODE_ENV=production node --harmony dist/server.js
```

## Deployment

*Needs work* – I’ve tested Heroku deployment and fixed any issues I’ve encountered, although it’s far from robust in terms of production checks.

Heroku will automatically run any postinstall tasks in `package.json` and run `npm start` afterwards. Currently the only postinstall task is `npm run build` which will build any static files. This means Heroku will mimic the `npm run build && npm run start` tasks used for local production checks.

To make the Koa server play nice, you should set a `HOSTNAME` config/environment variable (e.g. `ilovescott.herokuapp.com` or `ilovescott.com`); if you’re not using Heroku, you _might_ have to set a `PORT` environment variable too. Heroku automatically sets this as the server port changes over time.

For other hosting/auto-deployment environments, I haven’t been able to test, so you’re on your own soz.
