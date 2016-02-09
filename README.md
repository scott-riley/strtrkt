# Strtrkt
A semi-opinionated starting point for building multi-purpose apps with Isomorphic React and modular, component-specific CSS. I use this as a starting point for building apps where I want to develop my ‘marketing sites’ in the same app as my actual application. Because I’m lazy and sharing components is good for life.

This is heavily based on [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) and literally all credit should go over dem ways.

React Isomorphic Starterkit Copyright © 2015, Rick Wong

Also big smooches to [Iest](https://github.com/iest) for help with webpack’s magic fuckery.

## Features

- All the great stuff from [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit) including:
  - Super nice npm run stuff
  - ES2015 + ES7 love with Babel
  - Hot Reload
- Component-specific, namespaced CSS
- Separation of ‘marketing’ site and application out-of-the-box
- Convention for global Components for sharing between app and site
- Lost Grid support because it just makes sense
- Global CSS examples for sharing variables and modifiers between components
- IK blue so everyone knows you’re a creative startup!!

## Why Strtrkt?
Because I’m so startup and too cool for vowels.

## Why use ‘Modular’ CSS?
It’s nice to me. It makes sense to my brain. You might hate it. That’s cool too.

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

In short: don’t (yet)

If you wanna fuck around, go for it:

Clone the repo then:

```bash
npm install
npm run watch
```

## Usage

Run `npm run watch` in terminal. Try changing any of the example Components or Containers. Add your own Component with it’s own CSS file and include it in one of the parent components. See if you think modular CSS is all lovely and stuff.
