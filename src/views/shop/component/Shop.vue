<template>
  <div>
    <!-- Top menu -->
    <!-- !PAGE CONTENT! -->
    <div class="container">
      <div class="flex flex-row	" id="food">
        <!--
          產品列表
          當產品庫存為: 0
          使用 :class 加上 "w3-grayscale-max" class
        -->
        <div
            v-for="(item, index) in foodList"
            class="w-3/12 p-4"
            :key="index"
        >
          <img :src="item.image" style="width: 100%;"/>
          <h3>{{ item.title }}</h3>
          <h4>${{ item.price }}</h4>
          <!--
            數據驅動 UI
            根據條件變化不同 class
            當庫存為:0 的時候 ":disabled"
          -->
          <button
              :class="{
                      'uppercase px-8 py-2 rounded bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-md':  item.inventory === 1,
                      'uppercase px-8 py-2 rounded bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-md': item.inventory >= 2,
                      'uppercase px-8 py-2 rounded bg-gray-600 text-blue-50 max-w-max shadow-sm hover:shadow-md': !item.inventory
                    }"
              :disabled="!item.inventory"
              @click="addCart( item.id )">
            <!--
              數據驅動 UI
              按鈕顯示文案
            -->
            <span v-if="item.inventory === 1">最後 {{ item.inventory }} 客</span>
            <span v-if="item.inventory >= 2">限量 {{ item.inventory }} 客</span>
            <span v-if="!item.inventory">Sold out</span>
          </button>
        </div><!-- end preduct -->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "shop",
  computed: mapGetters({
    foodList: 'getProducts',
    cartTotal: 'getShoppingCartTotal'
  }),
  methods: mapActions([
    'addCart'
  ]),
}
</script>

<style scoped>

</style>