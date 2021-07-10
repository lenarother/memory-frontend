import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  data: {
    myName: 'Lena',
    memoryCards: null
  },
  methods: {
    fetchMemoryCards: function() {
      const url = 'http://localhost:8000/cards';

      fetch(url)
        .then(response => response.json())
        .then(data => this.memoryCards = data.data);

      console.log('Result from cards api')
      console.log(this.memoryCards)
    }
  },
  created: function() {
    this.fetchMemoryCards();
  },
  render: h => h(App),
}).$mount('#app')
