<template>
  <div class="textbox">
    <div id="box-title">
      <p class="card-title" @click="toggleShow(); focusInput();" v-show="!showTitle">{{ box.title }}</p>
      <input ref="title" v-show="showTitle" @blur="toggleShow(); changeBoxTitle(box)" @keyup.enter="blurInput();" v-model="box.title" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "TextBox",
  props: {
    parent: Number,
    id: Number
  },
  data() {
    return {
      box: {
        id: this.id,
        title: "",
        parent: this.parent
      },
      showTitle: false
    };
  },
  mounted() {
    this.box = this.$store.getters.getBoxById(this.parent, this.id);
  },
  methods: {
    ...mapMutations([
      'changeBoxTitle'
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
    }
  }
};
</script>

<style>
.textbox {
  padding: 0.625em;
  margin-bottom: 0.625em;
}

.textbox div {
  padding: 0.3125em;
}

.textbox p {
  margin: 0;
}

#box-title {
  border: 0.0625em solid #dfdfdf;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
  height: 2.25em;
  box-shadow: 0 0.0625em;
  background-color: white;
}

#box-title:hover {
  background-color: #eaeaf3;
}
</style>
