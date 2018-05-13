const app = angular.module('MyPortfolio', []);

this.showPortfolio = true;
this.showAbout = false;
this.showResume = false;

console.log(this.showPortfolio);

app.controller('MyPortfolio', ['$http', function($http){

  this.navAbout = ()=>{
    console.log('about clicked');
    this.showAbout = true;
    this.showPortfolio = false;
    this.showResume = false;
  }

  this.navPortfolio = ()=>{
    console.log('portfolio clicked');
    this.showAbout = false;
    this.showPortfolio = true;
    this.showResume = false;
  }

  this.navResume = ()=>{
    console.log('resume clicked');
    this.showAbout = false;
    this.showPortfolio = false;
    this.showResume = true;
  }

}])
