import {App} from "../App";
import {FacebookController} from "./facebook.controller";
const module:ng.IModule = App.module("fe.facebook", []);
module.controller("FacebookController", FacebookController);
declare const FB:FBSDK;

//https://gist.github.com/gcphost/872e798511a234ca419025337111ea16
module.run(($rootScope:any, $window:any) => {
  let js,
      id = 'facebook-jssdk',
      ref = document.getElementsByTagName('script')[0];

  if (document.getElementById(id)) {
    return;
  }

  js = document.createElement('script');
  js.id = id;
  js.async = true;
  js.src = "//connect.facebook.net/en_US/sdk.js";

  ref.parentNode.insertBefore(js, ref);

  js.onload = results => {
    FB.init({
      appId: "1770569109866535",
      xfbml: true,
      version: 'v2.8'
    });
    FB.login(response => { console.log(response)});
  };
});

// @ngInject
module.config(($stateProvider:angular.ui.IStateProvider) => {
  $stateProvider.state("login", {
    url: "/login",
    views: {
      application: {
        controller: FacebookController,
        controllerAs: "vm"
      }
    }
  });
});