import * as types from './mutations_type.js'

// state
export const state = {
    count: 0,
    todos: [
        {key: 0, content: 'vue.js 2.0', done: true},
        {key: 1, content: 'vuex 2.0', done: false},
        {key: 2, content: 'vue-router 2.0', done: false},
        {key: 3, content: 'vue-resource 2.0', done: false},
        {key: 4, content: 'webpack', done: false}
    ]
}
let todoKey = state.todos.length;

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


    [types.TODO.ADD](state, newTodo) {
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

    [types.TODO.TOGGLE](state, key) {
        for (let i in state.todos) {
            const item = state.todos[i];
            if (item.key === key) {
                item.done = !item.done;
                console.log('TOGGLE_TODO:', item.content, 'done?', item.done);
                break;
            }
        }
    },
    [types.TODO.DELETE](state, key) {
        for (let i in state.todos) {
            let item = state.todos[i];
            if (item.key === key) {
                console.log('DELETE_TODO:', item.content, ', index?', i);
                state.todos.splice(i, 1);
                break
            }
        }
    }
}

