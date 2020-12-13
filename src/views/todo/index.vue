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
      <div class="col-md-6">
        <h2>Todo List:</h2>
        <ul>
          <li v-for="(item, index) in todoList" :key="index">
            <label>
              <button type="button" class="btn btn-secondary" @click="toggleTodo( item.key )">
                check
              </button>
              {{ item.content }}
            </label>
            <button type="button" class="btn btn-danger" @click="deleteTodo( item.key )">
              delete
            </button>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Done List:</h2>
        <ul>
          <li v-for="(item, index) in doneList" :key="index">
            <label>
              <button type="button" class="btn btn-success" @click="toggleTodo( item.key )">Success</button>
              {{ item.content }}
            </label>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      newTodo: '',
    }
  },
  computed: {
    ...mapGetters({
      doneList: 'getDone',
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

</style>