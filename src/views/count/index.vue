<template>
  <div class="container">
    <h2>count:<span class="count"> {{ count }}</span></h2>
    <!-- 1. 增加 input 可以設定數值 model 綁定 num -->
    Set Number:
    <label>
      <input type="number" v-model="num" style="width: 50px;">
    </label>
    <br/>

    <button @click="actionIncrease(num)"> + </button>
    <button @click="actionDecrease(num)"> - </button>
    <button @click="actionMultiply(num)"> * </button>
    <button @click="actionDivision(num)"> / </button>
    <br/>

    <button @click="actionCountReset">歸零</button>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      num: 0
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
    }),
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset',
      'actionMultiply',
      'actionDivision',
    ]),
  },

}
</script>

<style scoped>

</style>