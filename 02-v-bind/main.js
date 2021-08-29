Vue.component('hello-component', {
  template: '<p>Hello</p>'
})

var app = new Vue({
	//options
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    toggle: false,  //trueにすると表示、falseにすると非表示
    colors: ['Red', 'Green', 'Blue'],
    user: {
      firstName: 'Taro',
      lastName: 'Yamada',
      age: 28
    },
    now: '',  //ここから v-on
  },
  methods: {
    onclick: function() {
      //alert('onclick!') //確認用
      this.now = new Date().toLocaleString();
    }
  },          //ここまで v-on

})