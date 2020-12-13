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
        <div v-for="(item, index) in todoList" :key="index" class="text-left row">
          <label class="col-10">
            <input
                type="checkbox"
                :checked="item.done"
                @change="toggleTodo( item.key )">
            <span :class="{lineThrough: item.done }">
                {{ item.content }}
              </span>
          </label>
          <button type="button" class="btn btn-outline-light col-2" @click="deleteTodo( item.key )">
            X
          </button>
        </div>
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
.lineThrough {
  text-decoration: line-through;
}

.container{
  margin: 0 auto;
  width:300px;
}
</style>