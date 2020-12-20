
const types = {
    ADD: 'TODO_ADD',
    TOGGLE: 'TODO_TOGGLE',
    DELETE: 'TODO_DELETE',
    UPDATE: 'TODO_UPDATE'
}

// state
const state = {
    todos: [
        {key: 0, content: 'vue.js 2.0', done: true},
        {key: 1, content: 'vuex 2.0', done: false},
        {key: 2, content: 'vue-router 2.0', done: false},
        {key: 3, content: 'vue-resource 2.0', done: false},
        {key: 4, content: 'webpack', done: false}
    ]
}
let todoKey = state.todos.length;

const getters = {
    getTodo: state => state.todos
}

//todo
const actions = {
    actionAddTodo({commit}, newTodo) {
        // 直接將 newTodo 傳遞給 mutation
        commit(types.ADD, newTodo);
    },

    toggleTodo({commit}, key) {
        commit(types.TOGGLE, key);
    },

    deleteTodo({commit}, key) {
        commit(types.DELETE, key);
    },

    updateTodo({commit}, obj) {
        console.log('updateTodo', obj);
        commit(types.UPDATE, obj);
    }

}

// mutations
const mutations = {
    [types.ADD](state, newTodo) {
        // todos 是一個 Array 所以 push 一個同結構的 Object
        console.log(newTodo)
        state.todos.push({
            key: todoKey, // 流水 key
            content: newTodo, // 新 todo 的內容
            done: false // 預設當然是未做完
        });
        // 流水 key +1
        todoKey++;
    },

    [types.TOGGLE](state, obj) {
        const item = state.todos.find(item => item.key === obj.key)
        item.done = obj.checked
        console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
    },
    [types.DELETE](state, key) {
        const index = state.todos.findIndex(item => item.key === key)
        state.todos.splice(index, 1)
        console.log(`TODOS DELETED. key: ${key}, index: ${index}`)
    },
    [types.UPDATE](state, obj) {
        const item = state.todos.find(item => item.key === obj.key)
        item.content = obj.change
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}