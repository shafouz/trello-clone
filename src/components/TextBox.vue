<template>
  <div class="textbox">
    <div>
      <h3 @click="toggle(); focusInput();" v-show="isActive">{{ title }}</h3>
      <input ref="title" v-show="!isActive" v-model="listTitle" @blur="toggle(); updateList(listTitle);" @keyup.enter="blurInput" />
    </div>
    <draggable v-model="boxes" group="myBoxes">
      <div v-for="(box, index) in boxes" :key="box.id">
        <box-title :list="list" :index="index" :title="box.title"></box-title>
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
  props: ['index', 'title'],
  components: {
    draggable,
    boxTitle
  },
  data(){
    return {
      isActive: true,
      list: this.index,
      listTitle: "",
    }
  },
  computed: {
    boxes: {
      get () {
        return this.$store.state.lists[this.index].box;
      },
      set (value) {
        this.$store.commit('updateBox', {
          index: this.index,
          value,
        })
      },
    },
  },
  methods: {
    newBox() {
      this.$store.commit('addBox', {list: this.index});
    },
    updateList(value){
      this.$store.commit('updateListTitle', {list: this.index, value: value})
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
  margin: 5px;
  padding: 0.625em;
  margin-bottom: 0.625em;
  background-color: #ebecf0;
  border: 0.0625em solid #dfdfdf;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
}

.textbox div {
  padding: 0.3125em;
}

.textbox p {
  margin: 0;
}
</style>
