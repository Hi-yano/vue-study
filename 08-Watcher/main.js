var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  watch: {
    message: function(newValue, oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue)
    }
  }
  })