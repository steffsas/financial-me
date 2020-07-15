<template>
  <div class="home">
    Wheels: {{ test }}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { getModule } from 'vuex-module-decorators'
import Test from '@/models/test'

const testModule = getModule(Test)

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    test() {
      console.log(testModule, testModule.wheels)
      return 2
    }
  }
}
</script>
