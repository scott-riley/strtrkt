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
- Lost Grid support because it just makes sense
- Global CSS examples for sharing variables and modifiers between components
- IK blue so everyone knows you’re a creative startup!!

## Things to look at and stuff

### Separate containers for site and app
Isomorphic React is pretty lovely for marketing/static sites. Rich client-side React is great for complex SPAs. Lots of boilerplates and starter kits are well set up for one or the other, but I thought I’d have a go at combining the two. There’s a few examples in this repo:

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
- Thanks to the joys of Webpack, local-scope and maybe magic, this will result in fully-namespaced CSS classes being applied anywhere you use this method

This seems super convoluted at first, and Modular CSS isn’t for everyone, but it’s one of those things that you really need to try to see the benefits of. It’s really not as complicated as it seems to get to grips with if you let go of a lot of the CSS paradigms of past.

### Global CSS
While the idea is to keep as much of the styles namespaced, local-scoped and component-specific, sometimes you just need some global shit. Resets, helpers, basic typographic baselines and global background/text colours are good examples of this and, naturally, if you’re using CSS variables, you want them exposed to any CSS file you might be using.

Global styles here are in the `src/globals` folder. The examples are super sparse right now and need a bit of work; but basically, a few simple variables are set in `src/globals/variables.css`, then `main.css` imports these variables and includes some (pretty dumb) global-scoped styles using the `:global` selector.

Things like grid classes, modifiers/helpers and global typography would also be good candidates for including in the global scope.

### Server-side CSS
Webpack is configured to bundle all CSS into a single file on the server (`dist/app.css`). This is set up so that everything is namespaced the same as the client-side stuff. React doesn’t like it when your server and client apps produce different markup (it defeats the purpose of universal JS), so it’s important that your namespacing is universal. Right now, making changes to how your CSS is bundled and namespaced means editing multiple webpack configs (sorry).

Other than that, the server side CSS should Just Work™ with local namespacing the same as client-side (minus the Hot Reload love).


## Installation

In short: don’t (yet)

If you wanna fuck around, go for it:

Clone the repo then:

```bash
npm install
npm run watch
```

## Usage

Run `npm run watch` in terminal. Try changing any of the example Components or Containers. Add your own Component with it’s own CSS file and include it in one of the parent components. See if you think modular CSS is all lovely and stuff.
