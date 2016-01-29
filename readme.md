# Vue Image Loader

Async image loader plugin for Vue.js

## Demo

[Live demo](http://eduardostuart.github.io/vue-image-loader/)

## Installation

```
npm install vue-image-loader --save
```

## Usage

```js
// Default timeout: 2 (optional)
Vue.use(require('vue-image-loader'),{
    timeout:2
}); // or Vue.use(window.VueImageLoader)
```


```html
<image-loader
    src="myimage.gif"
    alt="Awesome!">
</image-loader>
```

Check /examples for more

## License

MIT © [Eduardo Stuart](https://twitter.com/eduardostuart)
