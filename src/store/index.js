import Vue from 'vue';
import Vuex from 'vuex';
import studentsModule from './modules/students/index.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        students: studentsModule
    }
})

export default store;