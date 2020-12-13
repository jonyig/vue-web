<template>
  <div class="container">

    <input
        type="text"
        placeholder="add Todo.."
        v-model="newTodo"
        @keyup.enter="actionAddTodo"/>
    <!-- 按鈕增加 todo -->

    <button @click="actionAddTodo">add todo</button>

    <div class="row">
      <div class="col-md-12">
        <h2>Todo List:</h2>
          <TodoItem v-for="(item, index) in todoList" :item="item" :key="index"></TodoItem>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TodoItem from "@/views/todo/TodoItem";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: '',
    }
  },
  computed: {
    ...mapGetters({
      todoList: 'getTodo',
    }),
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo',
    ]),
    actionAddTodo() {
      this.$store.dispatch('actionAddTodo', this.newTodo);
      this.newTodo = '';
    }
  },

}
</script>

<style scoped>
.container{
  margin: 0 auto;
  width:300px;
}
</style>