<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Trello clone</router-link>
      <div>
        <button @click="newBoard" v-if="boardActive" class="btn btn-outline-navy">New Board</button>
        <button @click="resetBoard" v-if="boardActive" class="btn btn-outline-navy ml-2">Reset</button>
        <button @click="resetList" v-if="!boardActive" class="btn btn-outline-navy">Reset List</button>
      </div>
    </nav>
    <div class="container">
      <Board />
    </div>
  </div>
</template>

<script>
import Board from "./components/Board.vue"

export default {
  name: 'App',
  components: {Board},
  computed: {
    boardActive(){
      return this.$route.path === '/'
    }
  },
  methods: {
    newBoard(){
      this.$store.commit('addBoard');
    },
    resetBoard(){
      this.$store.commit('resetBoard');
    },
    resetList(){
      this.$store.commit('resetList', {boardId: parseInt(this.$route.params.id)});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style scoped>
.navbar {
  border-bottom: 1px solid #eaeaf3;
}

.navbar-brand {
  color: navy;
}

.btn.btn-outline-navy {
  color: navy;
  border-color: navy;
  padding: 0.5em;
  margin: 0;
  background-color: white;
  max-height: 38px;
}
</style>
