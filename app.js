new Vue({
  el: "#vue-app",
  data: {
    output: "[Blank Message]"
  },
  methods: {
    readRefs: function() {
      console.log(this.$refs.test.innerText);
    }
  },
  computed: {}
});
