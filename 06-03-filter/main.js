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

// フィルタの引数
Vue.filter('readMore', function(text, length, suffix) { // textは省略元の文字列、lengthは何文字省略するか、suffixは省略する部分に表示する文字列（接尾字）「…」　等
  return text.substring(0, length) + suffix   // 第一引数0からの開始位置、第二引数抽出する長さ
})

var app = new Vue({
  el: '#app',
  data: {
    price: 29800,
    jpyPrice: 298000,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    url: 'https://www.google.co.jp/'
  },
  // 以下はローカルフィルタ
  filters: {
    numberFormat: function(value) {
      return value.toLocaleString()
    }
  }
  })