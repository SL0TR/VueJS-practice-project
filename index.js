new Vue({
	el: '#app',
  data: {
    counter: 0
  },
  methods: {
    increase: function(){
      this.counter++;
      this.result = this.counter > 5 ? "Greater 5" : "Smaller 5"
    }
  }

});