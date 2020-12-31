<template>
  <div class="container">
    <div class="recommend p-4">
      <div class="flex flex-row">
        <div class="col-span-3">
          <img :src="recommend.image" style="width: 100%;">
        </div>
        <div class="col-span-9">
          <div class="recommend-info p-20">
            <h2> {{ recommend.title }} </h2>
            <hr>
            <h3>
              Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum. Just some random text, Once
              again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
            </h3>
            <h2> {{ recommend.price }} </h2>
            <button
                class="uppercase px-8 py-2 rounded bg-red-600 text-blue-50 max-w-max shadow-sm hover:shadow-md"
                @click="addCart(recommend.id)"
            >
              <font-awesome-icon icon="shopping-cart" size="lg"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-heading">
        總計： <span> ${{ total }} </span>
      </div>

      <table>
        <thead>
        <tr>
          <th>項目</th>
          <th>價錢</th>
          <th>餐點</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(cart, index) in cartList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.title }}</td>
          <td>
            <button
                class="uppercase px-8 py-2 bg-gray-300 text-gray-600 max-w-max shadow-sm hover:shadow-md"
                @click="cancelCart(cart.title)">
              <font-awesome-icon icon="times-circle" size="lg"/>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-row">
      <div class="col-span-6">
        <button
            class="uppercase px-8 py-2 rounded bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-md"
            @click="changeView({view: 'Shop'})">
          <font-awesome-icon icon="arrow-left" size="lg"/>
          back to Shop
        </button>
      </div>
      <div class="col-span-6">
        <button
            class="uppercase px-8 py-2 rounded bg-green-600 text-blue-50 max-w-max shadow-sm hover:shadow-md"
            >
          <font-awesome-icon icon="dollar-sign" size="lg"/>
          buy now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Cart",
  computed: mapGetters({
    cartTotal: 'getShoppingCartTotal',
    cartList: 'getShoppingCart',
    total: 'getCartPriceTotal',
    recommend: 'getRecommendedProducts'
  }),
  methods: {
    changeView(val) {
      this.$emit('changeView', val)
    },
    ...mapActions([
      'cancelCart',
      'addCart'
    ])
  },
}
</script>

<style scoped>

</style>