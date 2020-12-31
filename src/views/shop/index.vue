<template>
  <div>
    <Bar @changeView="changeView"/>

    <transition name="fade-transform" mode="out-in">
      <component
          :is="currentView"
          @changeView="changeView"
      />
    </transition>
  </div>
</template>

<script>

import Shop from "@/views/shop/component/Shop";
import Bar from "@/views/shop/component/Bar";
import Cart from "@/views/shop/component/Cart";

export default {
  name: "index",
  components: {Shop, Bar, Cart},
  data() {
    return {
      currentView: 'Shop',
    }
  },
  methods: {
    changeView(val) {
      this.currentView = val.view
    }
  }
}
</script>


<style scoped>

</style>