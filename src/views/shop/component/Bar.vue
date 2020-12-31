<template>
  <div class="bg-gray-400">
    <div class="">
      <a @click="changeView({view: 'Cart'})">
        <!-- 顯示購物車總產品數 -->
        <font-awesome-icon icon="shopping-cart" size="lg"/>
        {{ cartTotal }}
      </a>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Bar",
  methods: {
    changeView(val) {
      this.$emit('changeView',val)
    }
  },
  computed: mapGetters({
    cartTotal: 'getShoppingCartTotal'
  }),
}
</script>

<style scoped>

</style>