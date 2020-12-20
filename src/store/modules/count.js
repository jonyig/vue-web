const types = {
    INCREASE: 'count/INCREASE',
    DECREASE: 'count/DECREASE',
    MULTIPLE: 'count/MULTIPLE',
    DIVISION: 'count/DIVISION',
    COUNT_RESET: 'count/RESET',
}

const state = {
    count: 50
}

const getters = {
    getCount: state => state.count
}

const actions = {
    actionIncrease({commit}, num) {
        console.log(123)
        commit(types.INCREASE, num);
    },
    actionDecrease({commit}, num) {
        commit(types.DECREASE, num);
    },
    actionMultiply({commit}, num) {
        console.log('actionMultiply');
        commit(types.MULTIPLE, num);
    },
    actionDivision({commit}, num) {
        console.log('actionDivision');
        commit(types.DIVISION, num);
    },
    actionCountReset({commit}) {
        commit(types.COUNT_RESET);
    }
}

// mutations
const mutations = {
    [types.INCREASE](state, num) {
        state.count += Number(num);
        console.log('newINCREASE', num, 'state?', state.count);
    },
    [types.DECREASE](state, num) {
        state.count -= Number(num);
        console.log('newDECREASE', num, 'state?', state.count);
    },
    [types.MULTIPLE](state, num) {
        state.count *= Number(num);
    },
    [types.DIVISION](state, num) {
        state.count /= Number(num);
    },
    [types.COUNT_RESET](state) {
        state.count = 0;
        console.log('newCOUNT_RESET - state?', state.count);
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}