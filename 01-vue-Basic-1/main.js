var app = new Vue({
  //options
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    count: 10,
    user: {
      lastName: 'Yamada',
      firstName: 'Taro',
      prefecture: 'Tokyo',
    },
    colors: ['Red', 'Green', 'Blue']
  }
})