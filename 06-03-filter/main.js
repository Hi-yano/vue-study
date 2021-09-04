// グローバルフィルタはVueインスタンスが定義される前に記述する必要がある
// Vue.filter('numberFormat', function(value) {
//   return value.toLocaleString()
// })

// 以下フィルタの連結のためのグローバルフィルタ
// USDに変換するためのフィルタ
Vue.filter('toUSD', function(jpy){
  return jpy/100
})
// 数値を三桁づつコンマで区切るためのフィルタ
Vue.filter('numberFormat', function(value){
  return value.toLocaleString()
})

var app = new Vue({
  el: '#app',
  data: {
    price: 29800,
    jpyPrice: 298000
  },
  // 以下はローカルフィルタ
  filters: {
    numberFormat: function(value) {
      return value.toLocaleString()
    }
  }
  })