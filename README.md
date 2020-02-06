# webcomponent-mvp

What does a WebComponent look like?

This is an ultra-simple prototype of a WebComponent to replace a markup tag
with a rendering of Egyptian Hieroglyphic in SVG.

## Instructions

Optional, if you use Nix:

```
nix-shell -p nodejs
```

Then use NPM to install the project dependencies. This only has to be done
once:

```
npm install
```

Finally, start the app:

```
npm start 
```

Then visit http://localhost:8080

Check out `dist/index.html` for the actual markup and `src/index.js` for the
WebComponent code that does the rendering.

There's no responsiveness yet. Would need to figure out how to do that, or use
a library like [`hybrid.js`](https://hybrids.js.org/).