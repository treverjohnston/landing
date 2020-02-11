<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
    name: 'MainLayout',

    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('auth/getAuth');
    },
    methods: {
      logout() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/admin');
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.loggedIn
      }
    },
  }
</script>
<style>
  .bg-transparent {
    background-color: transparent;
  }
</style>