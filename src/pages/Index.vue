<template>
  <q-page class="">

    <!-- Header -->
    <div class="row justify-center">
      <div class="col-xs-12">
        <MobileHeader :shortHeader="shortestHeader" :imgHeader="imgHeader"></MobileHeader>
        <DesktopHeader :shortHeader="shortestHeader" :imgHeader="imgHeader"></DesktopHeader>
      </div>
    </div>

    <!-- Graphic Section -->
    <Graphic :headerIpsum="headerIpsum" :bodyIpsum="bodyIpsum"></Graphic>

    <!-- Callout Section -->
    <Callouts :shortHeader="shortHeader" :bodyIpsum="bodyIpsum"></Callouts>

    <!-- First Contact Section -->
    <Contact :shortHeader="shortHeader" :bodyIpsum="bodyIpsum"></Contact>

    <!-- Pictures Section -->
    <Pictures :shortestHeader="shortestHeader" :bodyIpsum="bodyIpsum"></Pictures>

    <!-- Reviews section -->
    <Reviews :customerIpsum="customerIpsum"></Reviews>

    <!-- Second Contact Section -->
    <ContactDark :questionIpsum="questionIpsum"></ContactDark>


    </div>
  </q-page>
</template>

<script>
  import MobileHeader from '../components/MobileHeader.vue'
  import DesktopHeader from '../components/DesktopHeader.vue'
  import Graphic from '../components/Graphic.vue'
  import Callouts from '../components/Callouts.vue'
  import Contact from '../components/Contact.vue'
  import Pictures from '../components/Pictures.vue'
  import Reviews from '../components/Reviews.vue'
  import ContactDark from '../components/ContactDark.vue'
  export default {
    name: 'PageIndex',
    data() {
      return {}
    },
    components: {
      MobileHeader,
      DesktopHeader,
      Graphic,
      Callouts,
      Contact,
      Pictures,
      Reviews,
      ContactDark
    },
    methods: {
    },
    computed: {
      questionsIpsum() {
        return this.$store.state.ipsum.questionsIpsum;
      },
      headerIpsum() {
        return this.$store.state.ipsum.headerIpsum;
      },
      customerIpsum() {
        return this.$store.state.ipsum.customerIpsum;
      },
      imgHeader() {
        return this.$store.state.ipsum.imgHeader;
      },
      shortHeader() {
        return this.$store.state.ipsum.shortHeader;
      },
      shortestHeader() {
        return this.$store.state.ipsum.shortestHeader;
      },
      bodyIpsum() {
        return this.$store.state.ipsum.bodyIpsum;
      }
    },

  }
</script>
<style>

</style>