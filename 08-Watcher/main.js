var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    km: 0,
    m: 0,
    mm: 0
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    },
    km: function(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function(value) {
      // console.log(value)
      this.km = value / 1000
      this.m = value 
      this.mm = value * 1000
    },
    mm: function(value) {
      // console.log(value)
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    }
  }
  })