<template>
  <div>

    <div>
      {{ socialShareData }}
    </div>
    <textarea v-model="testComputed"></textarea>
  </div>
</template>

<script>
export default {
  name: "index.vie",
  data() {
    return {
      "socialShareData": [
        {
          type: "instagram",
          targetUrl: 'ff',
        },
        {
          type: "line",
          targetUrl: '',
        },
        {
          type: "facebook",
          targetUrl: '',
        },
        {
          type: "message",
          targetUrl: '',
        },
      ]
    }
  },
  computed:{
    testComputed:{
      get: function() {
        return JSON.stringify(this.socialShareData);
      },
      set: function (newValue){
        this.socialShareData = JSON.parse(newValue)
      }

    }
  },
  // watch:{
  //   socialShareData(){
  //     conosle.log(this.socialShareData);
  //   }
  // }
}
</script>

<style scoped>
textarea{
  width:300px;
  height:300px;
}
</style>