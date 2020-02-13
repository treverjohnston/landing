<template>
    <q-card class="mobile-only">
        <q-img src="statics/headerMobile.jpg" alt="header image" spinner-color="white" basic class="mobileHeader">
            <div class="container">
                <div class="row justify-center q-gutter-sm">
                    <q-space />
                    <div class="col-md-4">
                        <div class="row mobile-only" v-anime="{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['200px', '0px'], duration: 1000},  easing: 'linear' }">
                            <div class="col-xs-12 q-mb-xl">
                                <q-icon name="code" size="3rem" />
                            </div>
                            <div class="col-xs-9">
                                <div class="text-h5 text-weight-bold text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </div>
                                <div class="text-h5 text-weight-bolder header header-callout">
                                    {{shortHeader}}
                                </div>
                                <div class="text-body2 text-weight-light text-white">
                                    {{imgHeader}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7"></div>
                    <div class="col-md-2 absolute-top-right">
                        <q-btn class="header-btn" flat no-caps unelevated>
                            Learn More
                        </q-btn>
                    </div>
                </div>
            </div>
        </q-img>
    </q-card>
</template>

<script>
    export default {
        name: 'MobileHeader',
        props: {
            shortHeader: {
                type: String
            },

            imgHeader: {
                type: String
            }
        }
    }
</script>