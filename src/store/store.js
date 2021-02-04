import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        crosses: true
    },
    mutations: {
        toggleTurn(state) {
            state.crosses = !state.crosses;
        }
    }
})
