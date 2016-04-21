# Getting Strtd
See what I did there? Fucking hilarious.

## Included by default
I’ve toyed with how deep to go including auxilliary stuff here; I want this repo to be a ‘working example’ but I also really, really don’t want to have it so you spend more time deleting the shit I’ve included than you do actually writing your cool as fuck apps.

Here’s what’s included so far:

### React Isomorphic Starterkit love
Straight from React Isomorphic Starterkit, we get some super great boilerplate:

- A webpack build process that transpiles ES6 for us (thanks to React Isomorphic Starterkit!)
- A server that can be started with `npm run watch`
- Universal routes that work client- and server-side
- Hot reload for dat no-refresh swag

### Separation and structure
Semi-opinionated structure for separating Components into app-specific, site-specific and global folders. Can be rearranged however you like.

- A `src/components` folder, with three sub-folders for `App`, `Site` and `Global`.
- A `src/containers` folder (which should be renamed) with `AppContainer`, `SiteContainer` and `routes.js`
- A `src/global` folder with some CSS files that get exposed to the global scope (needs a clean-up)

### Example components
Some example components (without getting too over-the-top) to show some of Strtrkt’s concepts in action. Yes I am already sick of typing the word Strtrkt but we here now and there’s no going back.

- `src/containers/SiteContainer.js` – The ‘container’ (or overall wrapper) for the site and any of its components
- `src/containers/AppContainer.js` – As above, but for the `/app` stuff.
- `src/containers/routes.js` - Default routes, examples of how we can nest `<Route>`s and have an `<IndexRoute>` attached to a Component
- `src/components/Global/Btn/` – Has `Btn.js` and `Btn.css` – super simple example of sharing a component between your app and site
- `src/components/App/Sidebar/` – `.js` and `.css` files for an ‘app-only’ component
- `src/components/Site/Nav/` - `.js` and `.css` files for a ‘site-only’ component

### Helpers and libs
Libraries, loaders and love. Some coded into the app; lots of external ones to enhance our dev environment.

- `src/global/modifiers.css` – A collection of modifiers that you can import for use as `className`s in any component; things like adding/collapsing padding, making fonts bigger etc.
- `src/global/variables.css` - A load of variables that get exposed to root scope and can be referenced in any component-specific CSS file.
- Webpack – Every JS developers new [favourite bundler](https://github.com/webpack/webpack). Webpack glues everything together for us; lets our loaders and plugins work together, transpiles our JS and CSS, runs our server, gives us hot reload… it’s the real MVP.
- LostGrid – An [absolutely awesome](https://github.com/peterramsing/lost), highly-usable grid system that makes life okay again
- PostCSS - An also [absolutely awesome](https://github.com/postcss/postcss) CSS tool, does lots of the heavy lifting (thanks to a few dope plugins) such as auto-prefixing our CSS, transpiling future syntax and, most importantly for this kit, namespacing and compiling our component-specific CSS.

I’m totally open to adding more or removing stuff here if people actually start using this and get annoyed at lack of/too many helpers/examples/default components

## Static files

If you need to add any static files like images etc. and don’t want to deal with Webpack loaders or anything silly, the `static` folder acts as a root folder when you watch locally or deploy to production, so just chuck your files in there.

For example, if your production server is `ilovescott.com` and you have a `scott+me-doing-a-kiss.jpg` in an `images` folder inside `static`, it’ll be available at `ilovescott.com/images/scott+me-doing-a-kiss.jpg` – this is my preferred method of adding images because it Just Works™.
