import {App} from "../App";
import {FacebookLoginController} from "./facebookLogin.controller";

const module:ng.IModule = App.module("fe.login", []);
module.controller("FacebookLoginController", FacebookLoginController);

// @ngInject
module.config(($stateProvider:angular.ui.IStateProvider) => {
  $stateProvider
    .state("facebookRedirect", {
      url: "/facebook/?code&state",
      views: {
        application: {
          controller: FacebookLoginController,
          controllerAs: "vm"
        }
      }
    })
    .state("facebook", {
      url: "/facebook",
      views: {
        application: {
          controller: FacebookLoginController,
          controllerAs: "vm"
        }
      }
    });
});