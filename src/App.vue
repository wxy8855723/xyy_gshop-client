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

        this.$store.dispatch('getGoods')
        this.$store.dispatch('getInfo')
        this.$store.dispatch('getRatings')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
