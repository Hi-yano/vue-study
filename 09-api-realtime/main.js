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
  watch: {

  },
  created: function() {

  },
  methods: {

  }
  })