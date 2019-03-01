<template>
    <div>
        <router-view/>
        <FooterGuide/>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
      components:{
        FooterGuide
      },

      mounted () {
        this.$store.dispatch('getUser')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
