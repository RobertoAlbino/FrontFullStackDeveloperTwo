import LoginController from './login.controller'

export const loginRoute = ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('login', {
      template: require('./login.html'),
      controller: LoginController,
      controllerAs: 'vm',
      url: '/'
    });
};
loginRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
