<template>
  <div class="text-left row" v-if="!updateMode">
    <label class="col-8">
      <input
          type="checkbox"
          :checked="item.done"
          @change="toggleTodo( item.key )"
      >
      <span
          :class="{lineThrough: item.done }">
                {{ item.content }}
      </span>
    </label>
    <button type="button" class="btn btn-outline-secondary col-2" @click="showEditMode">
      x
    </button>
    <button type="button" class="btn btn-outline-dark col-2" @click="deleteTodo( item.key )">
      X
    </button>
  </div>
  <div v-else>
    <input
        class="edit-input"
        v-focus="updateMode"
        placeholder="edit Todo.."
        :value="item.content"
        @keyup.enter="actionEdit"
        @blur="cancelEdit"
        @keyup.esc="cancelEdit"
    />
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TodoItem",
  props: {
    item: Object
  },
  data() {
    return {
      updateMode: false
    }
  },
  directives: {
    focus(el, {value}, {context}) {
      if (value) {
        context.$nextTick(() => {
          el.focus();
        })
      }
    }
  },
  methods: {
    ...mapActions([
      'toggleTodo',
      'deleteTodo',
      'updateTodo'
    ]),
    showEditMode() {
      this.updateMode = true
    },
    cancelEdit(e) {
      e.target.value = this.item.title;
      this.updateMode = false;
    },
    actionEdit(e) {
      const userChange = e.target.value.trim();
      console.log('userChange', this.item.key, userChange);
      this.updateTodo({
        key: this.item.key,
        change: userChange
      });
      this.updateMode = false;
    }
  },
}
</script>

<style scoped>
.lineThrough {
  text-decoration: line-through;
}

.edit-input {
  line-height: 1em;
}
</style>