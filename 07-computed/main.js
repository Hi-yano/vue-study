var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  }
})