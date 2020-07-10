var mixin = {
  methods: {
    getlocalStorage(name) {
      let str = JSON.parse(localStorage.getItem(String(name)));
      if (str == null) {
        return [];
      }
      return str;
    },
    setlocalStorage(name, item) {
      if (typeof item !== "string") {
        item = JSON.stringify(item);
      }
      localStorage.setItem(String(name), item);
    },
  },
};

export default mixin;
