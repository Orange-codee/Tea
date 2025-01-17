import { createApp } from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import VueAxios from 'vue-axios';
// eslint-disable-next-line object-curly-newline
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { all } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import emitter from './methods/emitter';
import $httpMessageState from './methods/pushMessageState';

Object.entries(all).forEach(([name, rule]) => {
  defineRule(name, rule);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = { currency, date };
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.config.globalProperties.emitter = emitter;

app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComponent', Loading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
