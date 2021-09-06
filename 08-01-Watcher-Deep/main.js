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
      },
      deep: true    // false にして値を変更すると色は変更されるが、ネストされた値の変更は監視されない。
    // ちなみに deep オプションを省略した場合は false と同じ動作になる
    }
  }
  })