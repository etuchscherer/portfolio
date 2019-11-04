import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-151507138-2'
});

new Vue({
  render: h => h(App),
}).$mount('#app')


