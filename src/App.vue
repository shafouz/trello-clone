<template>
  <div class="container" id="app ">
    <ListBox />
  </div>
</template>

<script>
import ListBox from './components/ListBox.vue'

export default {
  name: 'App',
  components: {
    ListBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 3.75em;
}
</style>
