var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One"
  },
  methods: {
    changeTitle: function() {
      two.title = "Title Changed";
    }
  },
  computed: {
    greet: function() {
      return "Hello from App One!";
    }
  }
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two"
  },
  methods: {},
  computed: {
    greet: function() {
      return "Hello from App Two!";
    }
  }
});
