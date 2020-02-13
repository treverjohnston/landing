<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.$ga.require('GMT-WSR63JJ');
      const options = { 'optimize_id': 'GTM-WSR63JJ' }
      this.$ga.require('pluginName', options)
    },
  }
</script>