Vue.component("greeting", {
  template:
    "<p>Hello World! I'm {{ name }}! <button v-on:click='changeName'>Change Name</button></p>",
  data: function() {
    return {
      name: "Karl"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Dominick";
    }
  }
});

new Vue({
  el: "#vue-app-one",
  data: {},
  methods: {},
  computed: {}
});

new Vue({
  el: "#vue-app-two",
  data: {},
  methods: {},
  computed: {}
});
