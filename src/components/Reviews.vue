<template>
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
            <q-carousel v-model="slide" transition-prev="scale" transition-next="scale" swipeable animated autoplay
                infinite control-color="grey" navigation padding arrows height="100%" class="bg-white rounded-borders">
                <q-carousel-slide v-for="card in reviews" :name="card.id" class="row justify-around">
                    <q-card class="bg-white q-mt-md q-mb-xl col-md-5">
                        <q-card-section>
                            <div class="text-h6 text-weight-light">{{customerIpsum}}</div>
                        </q-card-section>
                        <q-separator inset />
                        <q-card-section>
                            <q-icon size="5rem" name="img:statics/avatar.jpg"></q-icon>
                            <span class="text-h5 text-weight-bold desktop-only">Firstname Lastname</span>
                            <div class="text-h5 text-weight-bold mobile-only">Firstname Lastname</div>
                        </q-card-section>
                    </q-card>
                    <q-card class="bg-white q-mt-md q-mb-xl col-md-5 desktop-only">
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
</template>

<script>
    export default {
        name: 'Reviews',
        props: {
            customerIpsum: {
                type: String,
            }
        },
        data() {
            return {
                slide: 1
            }
        },
        computed: {
            reviews() {
                return this.$store.state.ipsum.reviews;
            }
        }
    }
</script>