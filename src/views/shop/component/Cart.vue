<template>
  <div class="container">
    <div class="recommend p-4">
      <div class="flex flex-row">
        <div class="col-span-3">
          <img :src="recommend.image" style="width: 100%;">
        </div>
        <div class="col-span-9">
          <div class="recommend-info p-10">
            <div class="p-2 text-left text-2xl font-extrabold"> {{ recommend.title }}</div>
            <hr>
            <div class="p-2 text-left w-75">
              Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum. Just some random text, Once
              again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.
            </div>
            <div class="p-2 text-left text-2xl font-extrabold"> ${{ recommend.price }}</div>
            <div class="text-left">
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
    </div>


    <div class="panel">


      <div class="bg-gray-400 pb-4 px-4 rounded-md w-full">
        <div class="flex justify-between w-full pt-6 ">
          <p class="ml-3"> Shopping Car</p>
          <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222"/>
              <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222"/>
              <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222"/>
            </g>
          </svg>

        </div>
<!--        <div class="w-full flex justify-end px-2 mt-2">-->
<!--          <div class="w-full sm:w-64 inline-block relative ">-->
<!--            <input type="" name="" class="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg" placeholder="Search" />-->

<!--            <div class="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">-->

<!--              <svg class="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">-->
<!--                <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="overflow-x-auto mt-6">

          <table class="table-auto border-collapse w-full">
            <thead>
            <tr class="rounded-lg text-sm font-medium text-gray-700 text-left" style="font-size: 0.9674rem">
              <th class="px-4 py-2 text-align bg-gray-200 " style="background-color:#f8f8f8">項目</th>
              <th class="px-4 py-2 text-align " style="background-color:#f8f8f8">價錢</th>
              <th class="px-4 py-2 text-align" style="background-color:#f8f8f8">餐點</th>
              <th class="px-4 py-2 text-align " style="background-color:#f8f8f8">操作</th>
            </tr>
            </thead>
            <tbody class="text-sm font-normal text-gray-700">
            <tr v-for="(cart, index) in cartList" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ cart.price }}</td>
              <td>{{ cart.title }}</td>
              <td>
                <button
                    class="uppercase px-8 py-2 bg-gray-300 text-gray-600 max-w-max shadow-sm hover:shadow-md"
                    @click="cancelCart(cart.id)">
                  <font-awesome-icon icon="times-circle" size="lg"/>
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="flex flex-row pt-2">
      <div class="col-span-6 w-full">
        <button
            class="uppercase px-8 py-2 rounded bg-yellow-500 text-blue-50 max-w-max shadow-sm hover:shadow-md"
            @click="changeView({view: 'Shop'})">
          <font-awesome-icon icon="arrow-left" size="lg"/>
          back to Shop
        </button>
      </div>
      <div class="col-span-6 w-full">
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