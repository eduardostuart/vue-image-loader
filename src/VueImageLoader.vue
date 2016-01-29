<template>
    <div class="image-loader">
        <div class="image-loader-info" v-if="loadInfo && isLoading">{{ loadInfo }}</div>
        <div class="image-loader-error" v-if="loadError && !success">{{ loadError }}</div>
        <img v-bind='{"src":src,"alt":alt}' v-el:image class="image" v-show="!isLoading && success">
    </div>
</template>
<script>
    export default {
        props:{
            src:{
                type:String,
                required:true
            },
            alt:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                isLoading:false,
                success:false
            }
        },
        ready(){
            let image = this.$els.image;

            this.isLoading = true;

            if(this.timeout !== null){
                this.defineTimeout();
            }

            image.onload  = this.onLoad.bind(this);
            image.onerror = image.onabort =  this.onFail.bind(this);
        },
        methods:{
            defineTimeout(){

                if(typeof this.timer !== 'undefined'){
                    clearTimeout(this.timer);
                }

                this.timer = setTimeout(this.checkTimeout.bind(this), this.timeout * 1000 );
            },
            checkTimeout(){
                if(! this.success){
                    this.$dispatch('imageloader.fail',this.$els.image);
                    this.$els.image.setAttribute('src','');
                }
            },
            onLoad(res){
                this.$dispatch('imageloader.success',this.$els.image);
                this.isLoading = false;
                this.success = true;
            },
            onFail(){
                this.isLoading = false;
                this.success = false;
            }
        }
    }
</script>