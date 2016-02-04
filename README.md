# React w/ Modular CSS Stuff
This is almost 100% based on [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) and literally all credit should go over dem ways.

React Isomorphic Starterkit Copyright © 2015, Rick Wong

Also big smooches to [Iest](https://github.com/iest) for help with webpack’s magic fuckery.

I’m using this as a base for starting projects but mostly as an example of Modular CSS because I’ve probably fucked up a lot of nice code here.

I wouldn’t use this right now m8s. Just an example of hot-loading when a component `import`s its own CSS file.

## Features

- All the great stuff from [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit)
- No more InlineStyle stuff, instead Components import their own CSS which gets namespaced all nice and shit
-

## Todo
- [] clean stuff up
- [] make sure CSS gets loaded server-side
- [] set up CSS globals like variables and shit
- [] add some form of grid system
- [] make it actually usable as a baseline for projects

## Things to look at and stuff
- `containers/Main.js` – the main app container, stripped right down as a blank slate
- `components/Sidebar.js` – an example component that `import`s its own CSS file
- `components/Sidebar.css` – modular CSS for the Sidebar component

## Installation

In short: don’t (yet)

If you wanna fuck around, go for it:

Clone the repo then:

```bash
npm install
npm run watch
```

## Usage

Run `npm run watch` in terminal. Try changing Main, or Sidebar, or Sidebar.css, or adding a component with its own CSS and throwing it in main. See if you think modular CSS is all lovely and stuff.
