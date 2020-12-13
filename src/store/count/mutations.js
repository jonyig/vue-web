import * as types from './mutations_type.js'

// state
export const state = {
    count: 0
}

// mutations
export const mutations = {
    // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
    [types.INCREASE](state, num) {
        state.count += Number(num);
    },
    [types.DECREASE](state, num) {
        state.count -= Number(num);
    },
    [types.MULTIPLE](state, num) {
        state.count *= Number(num);
    },
    [types.DIVISION](state, num) {
        state.count /= Number(num);
    },
    [types.RESET](state) {
        state.count = 0;
    },
}