// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#00076f",
        secondary: "#44008b",
        third: "#9f45b0",
        fourth: "#e54ed0",
        fifth: "#ffe4f2",
        accent: "#8c9eff",
        error: "#b71c1c",
        background: "#fff"
      }
    }
  }
});
