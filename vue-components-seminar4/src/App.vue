<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  <NewComponent text="проверка пропса текст"/>
  <!-- попробуем передать число вместо текста -->
  <!-- <NewComponent :text="0"/>  -->
  <!-- //в консооли ошибка Invalid prop: type check failed for prop "text". Expected String with value "0", got Number with value 0. -->
  <GallaryComp/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'
import GallaryComp from './components/GallaryComp.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    NewComponent,
    GallaryComp
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
