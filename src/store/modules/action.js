// 引入 mutations_type （引用同一個 key）
import * as types from './mutations_type.js'


//count
export const actionIncrease = ({ commit },num) => {
    console.log('actionIncrease');
    commit(types.INCREASE,num);
}
export const actionDecrease = ({ commit },num) => {
    console.log('actionDecrease');
    commit(types.DECREASE,num);
}
export const actionMultiply = ({ commit },num) => {
    console.log('actionMultiply');
    commit(types.MULTIPLE,num);
}
export const actionDivision = ({ commit },num) => {
    console.log('actionDivision');
    commit(types.DIVISION,num);
}
export const actionCountReset = ({ commit }) => {
    console.log('actionCountReset');
    commit(types.RESET);
}

//count end


//todo

export const actionAddTodo = ({ commit }, newTodo) => {
    // 直接將 newTodo 傳遞給 mutation
    commit(types.TODO.ADD, newTodo);
}

export const toggleTodo = ({ commit }, key) => {
    commit(types.TODO.TOGGLE, key);
}

export const deleteTodo = ({ commit }, key) => {
    commit(types.TODO.DELETE, key);
}

export const updateTodo = ({ commit }, obj) => {
    console.log('updateTodo', obj);
    commit(types.TODO.UPDATE, obj);
}