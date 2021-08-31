var app = new Vue({
  el: '#app',
  data: {
    bpi: null,
    hasError: false
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response) {
      // console.log(response.data.bpi)
      // console.log(response.data.bpi.USD.rate_float)
      this.bpi = response.data.bpi
    }.bind(this))
    .catch(function(error){
      console.log(error)    // 通信エラーの補足
      this.hasError = true
    }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)   // toFixedメソッド 数を固定少数点表記を用いてフォーマットする。
    }
  }
})