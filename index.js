new Vue({
	el: '#app',
  data: {
  	title: "Hellow World"
  },
  methods: {
  	changeTitle: function(event) {
    	this.title = event.target.value;
    }
  }
});