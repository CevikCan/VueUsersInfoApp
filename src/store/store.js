import Vue from "vue";
import Vuex from "vuex";
import userStore from "./userStore";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : {
        userStore,
    }
})