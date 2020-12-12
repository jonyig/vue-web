<template>
  <div class="container">
    <h1>Temperature Conversion</h1>
    <!-- 切換模式按鈕 -->
    <input id="toggleTemperature" type="checkbox" v-model="isCelsius">
    <label for="toggleTemperature">切換：{{ toggleTemperature }}</label>

    <h2 v-if="isCelsius">攝氏：{{ celsius }} °C</h2>
    <h2 v-if="!isCelsius">華氏：{{ fahrenheit }} °F</h2>
    <div v-show="!isCelsius" class="celsius">
      攝氏：
    </div>
    <div v-show="isCelsius" class="celsius">
      華氏：
    </div>
    <input type='number' v-model="userInput"/> °C
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: 0,
      isCelsius: true
    }
  },
  computed: {
    // ES6:
    fahrenheit() {
      // computed 計算後才會顯示到 template 上面。
      return Math.round(this.userInput * 9 / 5 + 32);
    },
    celsius() {
      return Math.round((this.userInput - 32) * 5/9);
    },
    toggleTemperature () {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  }
}
</script>

<style scoped>
.celsius {
  font-size: 1.5em;
}
</style>