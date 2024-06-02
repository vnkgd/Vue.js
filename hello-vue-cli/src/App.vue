<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld msg="New Item"/>
    <CalcComponent />
    <h2>Lorem ipsum dolor sit amet.</h2>
    <CalcComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalcComponent from './components/CalcComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CalcComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
