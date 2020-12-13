const getCount = state => { return state.count }

const getDone = state => {
    return state.todos.filter((item) => {
        return item.done;
    });
}
const getTodo = state => {
    return state.todos.filter((item)=>{
        console.log(item.content + item.done)
        return !item.done;
    });
}
export {getCount, getDone, getTodo}
