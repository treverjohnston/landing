<template>
    <q-card class="desktop-only">
        <q-img src="statics/header.jpg" alt="header image" spinner-color="white" basic class="desktopHeader">
            <div class="container">
                <div class="row justify-center q-gutter-sm">
                    <q-space />
                    <div class="col-md-4">
                        <div class="row desktop-only">
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
        name: 'DesktopHeader',
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