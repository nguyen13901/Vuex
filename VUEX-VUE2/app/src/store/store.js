import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {name: 'Banana', price: '20'},
            {name: 'Watermelon', price: '40'},
            {name: 'Apple', price: '60'},
            {name: 'Strawberry', price: '100'}
        ]
    }
})