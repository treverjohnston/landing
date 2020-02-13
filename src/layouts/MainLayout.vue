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
      this.$ga.require('GMT-WSR63JJ')
      this.$ga.require('13626801')
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

  .mobileHeader {
    height: 90vh;
    /* width: 100%; */
  }

  .desktopHeader {
    min-height: 90vh;
  }

  .graphic {
    max-width: 90vw;
  }

  .mobileGraphic {
    max-width: 90vw;
    margin-top: 3rem;
  }

  .header-btn {
    background-color: RGBA(0, 133, 198, 1);
    color: white;
    margin: 1rem 1rem 0 0;
  }

  .contact-form {
    background-color: RGBA(0, 133, 198, 1);
    color: white;
  }

  .contact-form-dark {
    background-color: RGBA(0, 47, 70, 1);
    color: white;
  }

  .header-callout {
    background-color: white;
    padding: 2rem;
    margin: 2rem 0;
  }

  .container {
    height: 100%;
    width: 100%;
  }

  .extra-padding {
    padding: 10rem 0 15rem 0;
  }

  .section {
    padding: 3rem 0;
  }

  .header {
    color: RGBA(0, 133, 198, 1);
  }

  .icon {
    color: RGBA(255, 195, 14, 1);
  }

  .submit-btn {
    background-color: RGBA(255, 195, 14, 1);
    color: white;
  }
</style>