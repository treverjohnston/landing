import VueAnalytics from 'vue-analytics';

export default async ({ router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: 'UA-158306225-1',
    router
  });
}
