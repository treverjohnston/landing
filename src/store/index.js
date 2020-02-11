import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth';
import submissions from './submissions';
import ipsum from './ipsum';

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      auth,
      submissions,
      ipsum
    },

    strict: process.env.DEV
  })

  return Store
}
