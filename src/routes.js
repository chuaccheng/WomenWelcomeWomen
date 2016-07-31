export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app5', {
      url: '/',
      template: '<app5></app5>'
    }
  )
  .state('app', {
        url: '/main',
        template: '<app></app>'
      }
  )
  .state('app2', {
    url: '/home',
    template: '<app2></app2>'
  })
  .state('app3', {
    url: '/newcomer',
    template: '<app3></app3>'
  })
  .state('app4', {
    url: '/guide',
    template: '<app4></app4>'
  })
  .state('app6', {
      url: '/newcomerMatch',
      template: '<app6></app6>'
  })
  .state('app7', {
      url: '/guideMatch',
      template: '<app7></app7>'
  })
  ;
}
