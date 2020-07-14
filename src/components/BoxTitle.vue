<template>
  <div id="title" @click="toggle(); focusInput();">
    <p v-show="isActive">{{ title }}</p>
    <input v-model="boxtitle" ref="title" @blur="toggle(); updateBox(list, index, boxtitle);" @keyup.enter="blurInput" v-show="!isActive" />
  </div>
</template>

<script>
export default {
  name: 'box-title',
  props: ['list', 'index', 'title'],
  methods: {
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
    updateBox(list, index, value){
      this.$store.commit('updateBoxTitle', {list: list, index: index, value: value})
    },
  },
  data(){
    return {
      isActive: true,
      boxtitle: "",
    }
  },
}
</script>

<style scoped>
#title {
  border: 0.0625em solid #dfdfdf;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
  box-shadow: 0.0625em 0.0625em;
  background-color: white;
  min-height: 36px;
}

#title:hover {
  background-color: #eaeaf3;
}
</style>