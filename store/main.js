export const state = () => {
    return {
        products: [],
    }
}

export const getters = {
    getProducts(state) {
        return state.products;
    }
}

export const actions = {
    addProduct(context, product) {
        context.commit('addProductMutation', product)
    }
}

export const mutations = {
    addProductMutation(state, product) {
        state.products.push(product);
        console.log(state.products)
    }
}
