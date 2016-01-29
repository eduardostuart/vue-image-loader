/**
 * vue-image-loader v1.0.4
 * https://github.com/eduardostuart/vue-image-loader
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueImageLoader"] = factory();
	else
		root["VueImageLoader"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.install = install;

	var _VueImageLoader = __webpack_require__(1);

	var _VueImageLoader2 = _interopRequireDefault(_VueImageLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function install(Vue, options) {

	    _VueImageLoader2.default.mixins = _VueImageLoader2.default.mixins || [];

	    options = options || {};

	    _VueImageLoader2.default.mixins.push({
	        props: {
	            timeout: {
	                type: Number,
	                default: options.timeout || null
	            }
	        },
	        data: function data() {
	            return {
	                loadInfo: options.loadInfo || null,
	                loadError: options.loadError || null
	            };
	        }
	    });

	    Vue.component('image-loader', _VueImageLoader2.default);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(2)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/VueImageLoader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(3)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/eduardostuart/Code/Projects/vue-image-loader/src/VueImageLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        src: {
	            type: String,
	            required: true
	        },
	        alt: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        return {
	            isLoading: false,
	            success: false
	        };
	    },
	    ready: function ready() {
	        var image = this.$els.image;

	        this.isLoading = true;

	        if (this.timeout !== null) {
	            this.defineTimeout();
	        }

	        image.onload = this.onLoad.bind(this);
	        image.onerror = image.onabort = this.onFail.bind(this);
	    },

	    methods: {
	        defineTimeout: function defineTimeout() {

	            if (typeof this.timer !== 'undefined') {
	                clearTimeout(this.timer);
	            }

	            this.timer = setTimeout(this.checkTimeout.bind(this), this.timeout * 1000);
	        },
	        checkTimeout: function checkTimeout() {
	            if (!this.success) {
	                this.$dispatch('imageloader.fail', this.$els.image);
	                this.$els.image.setAttribute('src', '');
	            }
	        },
	        onLoad: function onLoad(res) {
	            this.$dispatch('imageloader.success', this.$els.image);
	            this.isLoading = false;
	            this.success = true;
	        },
	        onFail: function onFail() {
	            this.isLoading = false;
	            this.success = false;
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"image-loader\">\n    <div class=\"image-loader-info\" v-if=\"loadInfo && isLoading\">{{ loadInfo }}</div>\n    <div class=\"image-loader-error\" v-if=\"loadError && !success\">{{ loadError }}</div>\n    <img v-bind='{\"src\":src,\"alt\":alt}' v-el:image class=\"image\" v-show=\"!isLoading && success\">\n</div>\n";

/***/ }
/******/ ])
});
;