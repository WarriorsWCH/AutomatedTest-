import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/styles/reset.css';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(iView);

const RouterConfig = {
    routes
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});