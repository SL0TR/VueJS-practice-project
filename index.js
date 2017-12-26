new Vue({
	el: '#app',
  data: {
  	everChangingP: 0
  },
  methods: {
  	increase: function(event) {
      this.everChangingP += 10;      
    },
    reset: function(event) {
      this.everChangingP = 0;
    }
  }

});