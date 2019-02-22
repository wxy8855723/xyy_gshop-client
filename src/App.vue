<template>
    <div>
        <router-view/>
        <FooterGuide/>
    </div>
</template>

<script>
    import VueRouter from 'vue-router'
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
