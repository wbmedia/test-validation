import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'

import * as rules from 'vee-validate/dist/rules'

for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  });
}


Vue.config.productionTip = false

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
