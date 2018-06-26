const app = angular.module('empanadasApp', ['ui.router', 'angular-growl'])

app.service('TotoService', TotoAPI)
app.controller('HolaMundoController', HolaMundoController)

app.config(routes)
app.config(['growlProvider', function(growlProvider) {
    growlProvider.globalTimeToLive(2000);
}])

