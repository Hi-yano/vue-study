var app = new Vue({
  el: '#app',
  /*data オプション
  ・ items  ・・・APIから取得した検索結果を格納
  ・ keyword・・・ユーザーが入力した検索キー
  ・ message・・・ユーザーに表示するメッセージ
  */
  data: {
    items: null,
    keyword: '',
    message: ''
  },
  watch: {  //フォームの監視
    keyword: function(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)  // ミリ秒で指定。指定時間内に同じイベントが発生すると処理は実行せず、発生しなければ処理を実行する → APIへのリクエストを間引くことができる。
  },
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        this.items = null
        this.message = ''
        return
      }
      this.message = 'Loading...'
      var vm = this
      var params = { page: 1, per_page: 20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
      .then(function(response) {
        console.log(response)
        vm.items = response.data
      })
      .catch(function(error) {
        vm.message = 'Error!' + error
      })
      .finally(function() {
        vm.message = ''
      })
    }
  }
  })