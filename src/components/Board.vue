<template>
  <div class="container">
    <button id="board-button" @click="addList">New List</button>
    <div class="row">  
      <div class="col-md-4" id="board" v-for="(list, index) in getLists" :key="index">
        <ListBox :id="index" />
      </div>
    </div>
  </div>
</template>

<script>
import ListBox from "./ListBox.vue";
import { mapMutations } from 'vuex';

export default {
  name: "Board",
  components: {
      ListBox
  },
  computed: {
    getLists(){
      return this.$store.state.lists
    },
  },
  methods: {
    ...mapMutations([
      'addList'
    ])
  }
}
</script>

<style>
#board-button {
  margin-left: 0.3125em;
}
</style>