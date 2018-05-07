// $(()=>{
//   let showAbout = false;
//   let showPortfolio = true;
//   let showResume = false;
//
//   // go to nav
//   navAbout = ()=>{
//     console.log("hi der lil babe");
//
//   }
//
// });


const app = angular.module('MyPortfolio', []);

this.showAbout = false;
this.showPortfolio = true;
this.showResume = false;

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
