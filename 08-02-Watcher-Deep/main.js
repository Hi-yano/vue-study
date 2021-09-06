var app = new Vue({
  el: '#app',
  data: {
    colors: [
      { name: 'Red' },
      { name: 'Green' },
      { name: 'Blue' }
    ]
  },
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
        // ここから下追記
        console.log('new: %s, oldValue: %s',
        JSON.stringify(newValue, null, '\t'),   // JSON.stringify は JavaScript の値をJSON文字列に変換するメソッド
        JSON.stringify(oldValue, null, '\t') )
      },
      deep: true    // false にして値を変更すると色は変更されるが、ネストされた値の変更は監視されない。
    // ちなみに deep オプションを省略した場合は false と同じ動作になる
    }
  }
})
