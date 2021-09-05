var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    basePrice: 100
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get: function() {
        return parseInt(this.basePrice * 1.08) // parseIntは整数を返す関数
      },
      set: function(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.08) // Math.ceil 小数点以下の値を切り上げした値を返す関数
      }
    },
    // 算出プロパティのキャッシュ
    computedNumber: function() {
      console.log('computed!') // キャッシュされるので１度しか呼ばれない
      return Math.random()
    }
  },
  // メソッドで実装した場合
  methods: {
    reversedMessageMethod: function() {
      return this.message.split('').reverse().join('')
    },
    // 算出プロパティのキャッシュ
    methodsNumber: function() {
      console.log('methods!') // キャッシュされないので3回呼ばれる
      return Math.random()
    }
  }
})