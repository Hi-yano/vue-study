var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  // メソッドで実装した場合
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    }
  }
})