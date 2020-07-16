<template>
  <div id="listbox">
    <draggable v-model="lists" class="row" id="text-box-div">
      <TextBox class="col-md-3" v-for="(value, index) in lists" :title="value.title" :key="value.id" :boardId="boardId" :listId="index"></TextBox>
    </draggable>
    <button class="btn btn-outline-navy" @click="newList">Nova lista...</button>
  </div>
</template>

<script>
import TextBox from "./TextBox.vue";
import draggable from 'vuedraggable';

export default {
  name: "ListBox",
  components: {
    TextBox,
    draggable
  },
  data(){
    return {
      boardId: parseInt(this.$route.params.id),
    }
  },
  computed: {
    lists: {
      get(){
        return this.$store.state.boards[this.boardId].lists;
      },
      set(value){
        this.$store.commit('updateList', {value: value, boardId: this.boardId});
      },
    },
  },
  methods: {
    newList(){
      this.$store.commit('addList', {boardId: this.boardId});
    }
  }
}
</script>

<style>
#listbox {
  color: navy;
  margin: 0.3125em;
}

strong {
  margin: 0.3125em 0.625em;
}

.btn.btn-outline-navy {
  color: navy;
  border-color: navy;
  padding: 0.625em;
  margin: 0.625em;
  background-color: white;
}

.btn.btn-outline-navy:hover {
  color: navy;
  background-color: #eaeaf3;  
}

button.btn.btn-outline-navy.btn-sm {
  position: absolute;
  bottom: 0;
  margin-bottom: 12px;
}

.col-md-3 {
  margin: 5px;
}
</style>
