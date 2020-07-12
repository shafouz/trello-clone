<template>
  <div id="listbox">
    <div class="card">
    <strong
      @click="toggleShow(); focusInput();"
      v-show="!showTitle"
    >
      {{ list.title }}
    </strong>
    <input 
      ref="title"
      v-model="list.title"
      v-show="showTitle"
      @blur="toggleShow(); changeListTitle(list);"
      @keyup.enter="blurInput();"
    />
    <draggable :list="getBoxes" group="boxes">
      <div id="text-box-div" v-for="(item, index) in getBoxes" :key="index">
        <TextBox :parent="list.id" :id="index"/>
      </div>
    </draggable>
    <button class="btn btn-outline-navy btn-sm" @click="addBox(list)">New box...</button>
    </div>
  </div>
</template>

<script>
import TextBox from "./TextBox.vue";
import { mapMutations } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: "ListBox",
  components: {
    TextBox,
    draggable
  },
  props: {
    id: Number
  },
  data: function() {
    return {
      list: {id: this.id, title: "", box: []},
      showTitle: false
    };
  },
  mounted() {
    this.list = this.$store.getters.getListById(this.id)
  },
  computed: {
    getBoxes: {  
      get() {
        return this.$store.getters.getListBoxById(this.id)
      },
      set(value) {
        this.$store.commit('updateList', value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeListTitle',
      'addBox'
    ]),
    toggleShow(){
      this.showTitle = !this.showTitle
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

#text-box-div {
  background-color: #ebecf0;
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
</style>
