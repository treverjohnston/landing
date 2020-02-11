<template>
  <q-page class="">
    <div class="row justify-center">
      <div class="col-xs-12">
        <q-card class="my-card">
          <q-img src="statics/header.jpg" alt="header image" basic>
            <div class="container">
              <div class="row justify-center q-gutter-sm">
                <q-space />
                <div class="col-xs-4">
                  <div class="row">
                    <div class="col-xs-12 q-mb-xl">
                      <q-icon name="code" size="6rem" />
                    </div>
                    <div class="col-xs-12 q-mt-xl">
                      <div class="text-h3 text-weight-bold text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>
                      <div class="text-h3 text-weight-bolder header header-callout">
                        {{shortHeader}}
                      </div>
                      <div class="text-h6 text-weight-light text-white">
                        {{imgHeader}}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-6"></div>
                <div class="col-xs-2 absolute-top-right">
                  <q-btn class="header-btn" flat no-caps unelevated>
                    Learn More
                  </q-btn>
                </div>
              </div>
            </div>
          </q-img>
        </q-card>
      </div>
    </div>

    <!-- Graphic Section -->
    <div class="row justify-around extra-padding">
      <div class="col-xs-4 self-center">
        <div class="text-h5 text-weight-bolder header">{{headerIpsum}}</div>
        <div class="text-body2 font-weight-light text-grey">
          {{bodyIpsum}}
        </div>
      </div>
      <div class="col-xs-4 self-center">
        <img src="statics/person.svg" alt="person by laptop graphic">
      </div>
    </div>

    <!-- Callout Section -->
    <div class="row justify-center bg-grey-4 section q-gutter-xl">
      <div class="col-xs-12 col-md-4">
        <div class="text-body2 font-weight-light text-grey">
          {{shortHeader}}
        </div>
        <div class="text-h5 text-weight-bolder header">
          {{shortHeader}}
        </div>
      </div>
      <div class="col-xs-6"></div>
    </div>
    <div class="row justify-center bg-grey-4 section q-gutter-xl">
      <div class="col-xs-12 col-md-5 q-mb-lg" v-for="icon in calloutIcons">
        <q-avatar color="white" size="4rem" :icon="icon" class="shadow-6 q-mb-lg">
        </q-avatar>
        <div class="text-h5 text-weight-bolder header">
          {{shortHeader}}
        </div>
        <div class="text-body2 font-weight-light text-grey">
          {{bodyIpsum}}
        </div>
      </div>
    </div>

    <!-- First Contact Section -->
    <div class="row justify-center extra-padding q-gutter-xl">
      <div class="col-xs-10 col-md-3">
        <div class="contact-form">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row justify-center">
              <div class="col-xs-10 text-h4 text-weight-bold q-mt-xl q-mb-xl">
                Let's get to know you better!
              </div>
              <q-input square class="col-xs-10" filled v-model="name" label="Name" bg-color="white" lazy-rules
                :rules="[ val => val && val.length > 0 || '']" />
              <q-input square class="col-xs-10" filled v-model="phone" label="Phone Number" mask="(###) ### - ####"
                bg-color="white" lazy-rules :rules="[ val => val && val.length > 0 || '']" />
              <q-input square class="col-xs-10" filled v-model="email" label="Email Address" bg-color="white" lazy-rules
                :rules="[ val => val && val.length > 0 || '']" />
              <q-input square class="col-xs-10" filled v-model="message" label="Message (Optional)" bg-color="white"
                type="textarea" />
            </div>
            <div>
              <div class="row justify-center">
                <div class="col-xs-10">
                  <q-btn label="Submit" type="submit" class="submit-btn full-width" size="xl" flat no-caps unelevated
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '25px'], duration: 1000},  easing: 'linear' }" />
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </div>
      <div class="col-xs-5">
        <div class="text-body2 font-weight-light text-grey">
          {{shortHeader}}
        </div>
        <div class="text-h5 text-weight-bolder header">
          {{shortHeader}}
        </div>
        <div class="q-mt-xl">
          <q-avatar color="white" size="4rem" icon="img:statics/callouts/camera-solid.svg" class="shadow-6 q-mb-lg">
          </q-avatar>
          <div class="text-h5 text-weight-bolder header">
            {{shortHeader}}
          </div>
          <div class="text-body2 font-weight-light text-grey">
            {{bodyIpsum}}
          </div>
        </div>
        <div class="q-mt-xl">
          <q-avatar color="white" size="4rem" icon="img:statics/callouts/images-solid.svg" class="shadow-6 q-mb-lg">
          </q-avatar>
          <div class="text-h5 text-weight-bolder header">
            {{shortHeader}}
          </div>
          <div class="text-body2 font-weight-light text-grey">
            {{bodyIpsum}}
          </div>
        </div>
      </div>
    </div>

    <!-- Pictures Section -->
    <div class="row justify-center bg-grey-4 section q-gutter-xl">
      <div class="col-xs-11 text-center">
        <div class="text-h3 text-weight-bold header q-mb-xl">
          {{shortestHeader}}
        </div>
      </div>
      <div class="section col-xs-11">
        <div class="row justify-around">
          <div class="col-xs-5">
            <div class="text-h4 text-weight-bold header q-mb-xl">
              {{shortestHeader}}
            </div>
            <div class="text-h5">
              {{bodyIpsum}}
            </div>
          </div>
          <div class="col-xs-5">
            <q-img src="statics/header2.jpg" alt="header image"> </q-img>
          </div>
        </div>
      </div>
      <div class="section col-xs-11">
        <div class="row justify-around">
          <div class="col-xs-5">
            <q-img src="statics/header.jpg" alt="header image"> </q-img>
          </div>
          <div class="col-xs-5">
            <div class="text-h4 text-weight-bold header q-mb-xl">
              {{shortestHeader}}
            </div>
            <div class="text-h5">
              {{bodyIpsum}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews section -->
    <div class="row justify-center section">
      <div class="col-xs-11 text-center">
        <div class="text-h5 text-weight-bold q-mb-sm text-grey-7">
          Real People Real Stories
        </div>
        <div class="text-h3 text-weight-bold header q-mb-xl">
          What Our Customers Say
        </div>
      </div>
      <div class="col-xs-11 col-md-11 q-mb-xl">
        <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated autoplay infinite
          control-color="grey" navigation padding arrows height="100%" class="bg-white rounded-borders">
          <q-carousel-slide v-for="card in reviews" :name="card.id" class="row justify-around">
            <q-card class="bg-white q-mt-md q-mb-xl col-md-5">
              <q-card-section>
                <div class="text-h6 text-weight-light">{{customerIpsum}}</div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <q-icon size="5rem" name="img:statics/avatar.jpg"></q-icon>
                <span class="text-h5 text-weight-bold">Firstname Lastname</span>
              </q-card-section>
            </q-card>
            <q-card class="bg-white q-mt-md q-mb-xl col-md-5">
              <q-card-section>
                <div class="text-h6 text-weight-light">{{customerIpsum}}</div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <q-icon size="5rem" name="img:statics/avatar2.jpg"></q-icon>
                <span class="text-h5 text-weight-bold">Firstname Lastname</span>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <!-- Second Contact Section -->
    <div class="row justify-center section q-gutter-xl bg-grey-4">
      <div class="col-xs-10 col-md-4">
        <div class="contact-form-dark">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row justify-center">
              <div class="col-xs-9 text-h4 text-weight-bold q-mt-xl q-mb-xl">
              </div>
              <q-input square class="col-xs-9" filled v-model="name" label="Name" bg-color="white" lazy-rules
                :rules="[ val => val && val.length > 0 || '']" />
              <q-input square class="col-xs-9" filled v-model="email" label="Email Address" bg-color="white" lazy-rules
                :rules="[ val => val && val.length > 0 || '']" />
              <q-input square class="col-xs-9" input-style="height:200px" filled v-model="message" label="Message"
                bg-color="white" flazy-rules :rules="[ val => val && val.length > 0 || '']" type="textarea" />
            </div>
            <div>
              <div class="row justify-center">
                <div class="col-xs-7 q-mt-xl q-mb-xl">
                  <q-btn label="Submit" type="submit" class="submit-btn full-width" size="xl" flat no-caps unelevated
                    v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-100px', '0px'], duration: 1000},  easing: 'linear' }" />
                </div>
              </div>
            </div>
          </q-form>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="text-h5 text-weight-bold q-mb-sm text-grey-6">
          Get in touch with us
        </div>
        <div class="text-h3 text-weight-bold header q-mb-xl">
          Have Questions?
        </div>
        <div class="text-h5 text-weight-medium text-grey-7">
          {{questionsIpsum}}
        </div>
        <div class="text-h5 q-mt-xl">
          <q-avatar color="white" size="4rem" icon="img:statics/callouts/address-card-solid.svg"
            class="shadow-6 self-center">
          </q-avatar>
          <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
            1234 Main St, City, 12345 </span>
        </div>
        <div class="text-h5 q-mt-md">
          <q-avatar color="white" size="4rem" icon="img:statics/callouts/phone-solid.svg" class="shadow-6 self-center">
          </q-avatar>
          <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
            888-888-8888 </span>
        </div>
        <div class="text-h5 q-mt-md">
          <q-avatar color="white" size="4rem" icon="img:statics/callouts/envelope-solid.svg"
            class="shadow-6 self-center">
          </q-avatar>
          <span class="text-h5 text-weight-medium self-center text-grey-8 q-ml-md">
            heythere@company.com </span>
        </div>
      </div>
    </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    data() {
      return {
        name: '',
        phone: '',
        email: '',
        message: '',
        slide: 1
      }
    },
    methods: {
      onSubmit() {
        var obj = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          body: this.message
        }
        this.$store.dispatch('submissions/submit', obj)
      }
    },
    computed: {
      reviews() {
        return this.$store.state.ipsum.reviews;
      },
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
      calloutIcons() {
        return this.$store.state.ipsum.calloutIcons;
      },
      calloutBody() {
        return this.$store.state.ipsum.calloutBody;
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
  .header-btn {
    background-color: RGBA(0, 133, 198, 1);
    color: white;
    margin-top: 1rem;
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