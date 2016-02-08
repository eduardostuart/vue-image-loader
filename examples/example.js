Vue.config.debug = true;

// Default timeout 1
Vue.use(VueImageLoader,{
    loadInfo: 'Loading',
    loadError:'Ops..something went wrong',
    timeout:1
});

new Vue().$mount('body');