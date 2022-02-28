<template>
    <div>
        <div>err1:{{err1}}</div>
        <div>err2:{{err2}}</div>
    </div>
</template>
<script>
    import * as faceapi from '@vladmandic/face-api';
    // import * as faceapi from "face-api.js";
    import vconsole from 'vconsole';
    let _this;
    export default {
        data(){
            return {
                err1:"",
                err2:"",
            }
        },
        created(){
            new vconsole();
        },
        mounted(){
            _this = this;
            this.$nextTick(() => {
                this.fnInit();
            });
        },
        methods:{
            async fnInit(){
                console.log('modelName:');
                console.log(faceapi.nets.tinyFaceDetector.getDefaultModelName());
                try {
                    await faceapi.nets['tinyFaceDetector'].loadFromUri("https://busyshadow.github.io/models");
                }catch(e){
                    this.err1 = e;
                }
                try {
                    await faceapi.loadFaceLandmarkModel("https://busyshadow.github.io/models");
                } catch(e){
                    this.err2 = e;
                }

                _this.options = new faceapi.TinyFaceDetectorOptions({
                    inputSize: 224, // 160 224 320 416 512 608
                    scoreThreshold: 0.3, // 0.1 ~ 0.9
                });
            }
        }
    }
</script>
