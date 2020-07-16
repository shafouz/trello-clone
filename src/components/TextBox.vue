<template>
  <div class="textbox">
    <div class="ml-1">
      <h3 class="list-title" @click="toggle(); focusInput();" v-show="isActive">{{ title }}</h3>
      <textarea class="form-control" ref="title" v-show="!isActive" v-model="listTitle" @blur="toggle(); updateList(listTitle);" @keyup.enter="blurInput" />
    </div>
    <draggable v-model="boxes" group="myBoxes">
      <div v-for="(box, index) in boxes" :key="box.id">
        <box-title :boardId="boardId" :listId="listId" :boxId="index" :title="box.title"></box-title>
      </div>
    </draggable>
    <button class="btn btn-outline-navy btn-sm" @click="newBox()">Nova caixa...</button>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import boxTitle from './BoxTitle.vue';

export default {
  name: "TextBox",
  props: { boardId: Number, listId: Number, title: String },
  components: {
    draggable,
    boxTitle
  },
  data(){
    return {
      isActive: true,
      listTitle: "",
    }
  },
  computed: {
    boxes: {
      get () {
        // this.$store.state.boards[boardId].lists[listId].box
        return this.$store.state.boards[this.boardId].lists[this.listId].box;
      },
      set (value) {
        this.$store.commit('updateBox', {
          // listId: this.listId
          boardId: this.boardId,
          listId: this.listId,
          value,
        })
      },
    },
  },
  methods: {
    newBox() {
      // listId: this.listId
      this.$store.commit('addBox', {boardId: this.boardId, listId: this.listId});
    },
    updateList(value){
      // listId: this.listId
      this.$store.commit('updateListTitle', {boardId: this.boardId, listId: this.listId, value: value})
    },
    // events
    toggle(){
      this.isActive = !this.isActive;
    },
    focusInput(){
      setTimeout(() => {
        this.$refs.title.focus();
      }, 100);
    },
    blurInput(){
      this.$refs.title.blur();
    },
  },
};
</script>

<style>
.textbox {
  padding: 0.5em;
  background-color: #ebecf0;
  border: 0.0625em solid #dfdfdf;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
  max-width: 17em !important;
  min-height: 32em;
}

.textbox div {
  padding: 0.3125em;
}

.textbox p {
  margin: 0;
}

.list-title:hover {
  cursor: pointer;
} 
</style>
