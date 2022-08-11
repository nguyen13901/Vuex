import { createStore } from 'vuex'
 
export default createStore({
    state: {
        products: [
            {name: "Banana", price: "20"},
            {name: "Apple", price: "60"},
            {name: "Watermelon", price: "10"},
            {name: "Strawberry", price: "100"}
        ]
    }
})
