<template>
  <div id="listbox">
    <!--
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
    />-->
      <draggable v-model="lists" class="row" id="text-box-div">
        <TextBox class="col-3" v-for="(value, index) in getLists" :title="value.title" :key="value.id" :index="index"></TextBox>
      </draggable>
    <!--<button class="btn btn-outline-navy btn-sm" @click="addBox(list)">New box...</button>-->
    <!--</div>-->
  </div>
</template>

<script>
import TextBox from "./TextBox.vue";
//import { mapMutations } from 'vuex';
import draggable from 'vuedraggable';

export default {
  name: "ListBox",
  components: {
    TextBox,
    draggable
  },
  computed: {
    getLists() {
      return this.$store.state.lists;
    },
    lists: {
      get(){
        return this.$store.state.lists;
      },
      set(value){
        this.$store.commit('updateList', value);
      },
    },
  },
  /*
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
  */
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
</style>
