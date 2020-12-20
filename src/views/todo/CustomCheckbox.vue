<template>
  <div>
    <label>
      <input
          type="checkbox"
          :checked="item.done"
          @change="handleChange"
      />
    </label>
    <span
        :class="{lineThrough: item.done }">
                {{ item.content }}
    </span>
  </div>
</template>

<script>

export default {
  name: "CustomCheckbox",
  props: {
    item: Object
  },
  methods: {
    handleChange($event){
      this.$emit('toggleTodo',{
        key: this.item.key,
        checked: $event.target.checked
      })
    }
  }
}
</script>

<style scoped>
.lineThrough {
  text-decoration: line-through;
}
</style>