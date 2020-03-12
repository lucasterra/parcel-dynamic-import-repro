## Repro Repo for Parcel Bundler [#2863](https://github.com/parcel-bundler/parcel/issues/2863)

To get started:

```
yarn install
yarn start
```

Open:  
http://localhost:1234/ (should be ok)

Then open:  
http://localhost:1234/page-2 (should fail with)
```
src.a2b27638.js:37 Uncaught Error: Cannot find module 'src/images/cow.svg'
    at newRequire (src.a2b27638.js:37)
    at newRequire (page-2.20f28abf.js:29)
    at newRequire (src.a2b27638.js:21)
    at localRequire (src.a2b27638.js:53)
    at Object.parcelRequire.src/components/component-1.js.react (component-1.js:2)
    at newRequire (src.a2b27638.js:47)
    at newRequire (page-2.20f28abf.js:29)
    at newRequire (page-2.20f28abf.js:21)
    at localRequire (page-2.20f28abf.js:53)
    at Object.parcelRequire.src/pages/page-2.js.react (page-2.js:2)
```
