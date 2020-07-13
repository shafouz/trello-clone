<template>
  <div class="textbox">
    <h3>{{ title }}</h3>
    <draggable v-model="boxes" group="myBoxes">
      <div v-for="(box,index) in boxes" :key="box.id">
        <toggleTitle @update="updateBox(list, box.id, $event)" :index="index" :title="box.title"></toggleTitle>
      </div>
    </draggable>
    <button @click="newBox">Nova caixa...</button>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import toggleTitle from './Title.vue';

export default {
  name: "TextBox",
  props: ['index', 'title'],
  components: {
    draggable,
    toggleTitle
  },
  data(){
    return {
      show: true,
      list: this.index
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
      this.$store.commit('addBox', {index: this.index});
    },
    updateBox(index, id, value){
      this.$store.commit('updateBoxTitle', {index: index, id: id, value: value})
    }
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
