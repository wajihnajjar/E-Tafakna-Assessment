angular.module('app')
.controller('AppCtrl', function() {
  this.view = 'phrases';
  this.changeView = function(option) {
    this.view = option;
  };
})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});
