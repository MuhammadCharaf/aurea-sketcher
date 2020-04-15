import VueRouter from 'vue-router';
import Test from './pages/Test.vue';
import ScenarioPage from './pages/ScenarioPage.vue';

const routes = [
  { path: '/scenario', component: ScenarioPage },
  { path: '/foo', component: Test },
];

export default new VueRouter({
  routes,
});
