Vue.config.debug = true;

// Default timeout 2
Vue.use(VueImageLoader,{
    loadInfo: 'Loading',
    loadError:'Ops..something went wrong',
    timeout:2
});

new Vue().$mount('body');