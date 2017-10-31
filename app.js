const app = angular.module('empanadasApp', ['ui.router'])

app.service('TotoService', TotoAPI)

app.config(routes)
