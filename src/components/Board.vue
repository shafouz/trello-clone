<template>
  <div id="board">
    <div class="row" v-if="boardActive">
      <div class="col-3" v-for="item in boards" :key="item.id">
        <router-link class="btn btn-outline-navy" :to="`/board/${item.id}`">Board {{ item.id }}</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Board',
  computed: {
    boards: {
      get(){
        return this.$store.state.boards
      }
    },
    boardActive(){
      return this.$route.path === '/'
    },
    listsPath(id){
      return `/board/${id}`
    }
  },
}
</script>

<style scoped>
.btn.btn-outline-navy {
  width: 200px;
  height: 100px;
  color: navy;
  border-color: navy;
  margin: 0.6em;
  padding: 2.5em 0;
  background-color: white;
}

.btn.btn-outline-navy:hover {
  color: navy;
  background-color: #eaeaf3;  
}
</style>