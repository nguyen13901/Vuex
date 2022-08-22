import { createStore } from 'vuex'
 
export default createStore({
    strict: true,
    state: {
        products: [
            {name: "Banana", price: "20"},
            {name: "Apple", price: "60"},
            {name: "Watermelon", price: "10"},
            {name: "Strawberry", price: "100"}
        ]
    },
    getters: {
        saleProducts(state) {
            var saleProducts = state.products.map( product => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice(state, payload) {
            state.products.forEach(product => { 
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice(context, payload) {
            setTimeout(() => {
                context.commit("reducePrice", payload);
            }, 2000);
        }
    }
})
