const types = {
    ADD_CART: 'store/ADD_CART',
    CANCEL_CART: 'store/CANCEL_CART'
}

const state = {
    // 餐點列表
    products: [
        {
            id: 1,
            title: 'The Perfect Sandwich, A Real NYC Classic',
            image: 'http://www.w3schools.com/w3images/sandwich.jpg',
            inventory: 5,
            price: 155
        },
        {
            id: 2,
            title: 'Let Me Tell You About This Steak',
            image: 'http://www.w3schools.com/w3images/steak.jpg',
            inventory: 1,
            price: 1380
        },
        {
            id: 3,
            title: 'Cherries, interrupted',
            image: 'http://www.w3schools.com/w3images/cherries.jpg',
            inventory: 2,
            price: 499
        },
        {
            id: 4,
            title: 'Once Again, Robust Wine and Vegetable Pasta',
            image: 'http://www.w3schools.com/w3images/wine.jpg',
            inventory: 3,
            price: 790
        }
    ],
    // 購物車
    shoppingCart: [],
}

const getters = {
    // 取得餐點列表
    getProducts: state => state.products,
    // 取得購物車總數量
    getShoppingCartTotal: state => state.shoppingCart.length,

    getShoppingCart: state => state.shoppingCart,

    getCartPriceTotal: state => {
        return state.shoppingCart.reduce( (target, item) => {
            target += item.price
            return target
        },0)
    },

    getRecommendedProducts: state => {
        // 先取得庫存餐點表
        const inventoryList = state.products.filter(p => p.inventory > 0);
        // 取隨機數
        const random = Math.round(Math.random() * (inventoryList.length - 1));
        // 回傳隨機數的餐點
        return inventoryList[random];
    }
}

const actions = {
    addCart({commit}, id) {
        commit(types.ADD_CART, id);
    }
}

const mutations = {
    [types.ADD_CART](state, id) {
        // ES6 array find 找到條件成立的內容。
        const product = state.products.find(item => item.id === id && item.inventory !== 0);
        // 餐點庫存 -1
        product.inventory = product.inventory - 1;
        // 餐點加入購物車 title, price
        state.shoppingCart.push({
            title: product.title,
            price: product.price,
        });
    },

    [types.CANCEL_CART](state, id){
        const cartIndex = state.shoppingCart.findIndex(item => item.id === id);
        state.shoppingCart.splice(cartIndex, 1);
        const product = state.products.find(item => item.id === id);
        product.inventory += 1;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}