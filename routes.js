var routes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('holaMundo', {
      url: "/",
      templateUrl: "partials/hola_mundo.html"
    })

  $urlRouterProvider.otherwise("/")

}