# React + Modular CSS: Multi-Purpose Starter Kit
A semi-opinionated starting point for building multi-purpose apps with Isomorphic React and modular, component-specific CSS. I use this as a starting point for building apps where I want to develop my ‘marketing sites’ in the same app as my actual application. Because I’m lazy and sharing components is good for life.

This is heavily based on [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) and literally all credit should go over dem ways.

React Isomorphic Starterkit Copyright © 2015, Rick Wong

Also big smooches to [Iest](https://github.com/iest) for help with webpack’s magic fuckery.

## Features

- All the great stuff from [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) including:
  - Super nice npm run stuff
  - ES2015 + ES7 love with Babel
  - Hot Reload
- No more InlineStyle stuff, instead Components import their own CSS which gets namespaced all nice and shit
- Separate containers and routes for Site and Application, letting you develop a marketing site and application in the same React app
- Global components if you want to share anything between your site and app

## Todo
- [ ] clean stuff up
- [ ] make sure CSS gets loaded server-side
- [ ] set up CSS globals like variables and shit
- [ ] add some form of grid system
- [ ] make it actually usable as a baseline for projects

## Things to look at and stuff

### Separate containers for site and app
Isomorphic React is pretty lovely for marketing/static sites, lots of boilerplates and starter kits are well set up for one or the other, but I thought I’d have a go at combining the two. There’s a few examples in this repo:

`containers/AppContainer.js` – a super basic container for any app-specific chrome you might want to use

`containers/SiteContainer.js` - same as above but for your ‘marketing’ site stuff, this is where you’d probs add your nav and footer, but your call m8s

`routes.js` – Uses nested `<Route>`s and `<IndexRoutes>` to let you nest and include your app/site components in the right place

`components/App/MainScreen/MainScreen.js` - the main screen of the ‘app’, feel free to rename to something better-suited to your project (e.g. Dashboard, LatestPosts, KissUrDad). Also has a `handleSubmit()` function and some state stuff, as well as a functional `Btn` Component example.

`components/Site/Homepage/Homepage.js` – the index screen of your site and the first thing that loads when you hit `localhost:8000` or your domain or whatever

`components/Global/Btn/` – contains the `Btn.js` and `Btn.css` files. This is in Global as it’s implicit that it will be shared between the site and the app, although it’s just JS, so you can use any component from anywhere. Just tryna be neat yo.

`Btn` is also a good example of the Modular CSS stuff going on; in the `Btn.css` file, there’s a `.root` style defined. Then in `Btn.js` we `import` our Btn styles and add them to our button using `className={s.root}`. A bit more on this below.

### Modular CSS
Touched on this above with the `Btn` example, but if you need a bit more info on what’s happening/how it works:
- Write component-specific CSS, just like normal CSS
- Import that CSS in the component, e.g. `import s from Btn.css`
- This will set `s` to an object, and you can use any of the classes from your CSS as props of this object
  - E.g., we have a `.root` class in `Btn.css`
  - We `import s from Btn.css` in our component
  - We can use any of the classes in the CSS file as a prop of `s`:
    - `<Btn className={s.root}>`
- Thanks to the joys of Webpack and magic, this will result in fully-namespaced CSS classes being applied anywhere you use this method

This seems super convoluted at first, and Modular CSS isn’t for everyone, but it’s one of those things that you really need to try to see the benefits of. It’s really not as complicated as it seems to get to grips with if you let go of a lot of the CSS paradigms of past.

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
