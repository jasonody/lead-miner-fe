export class FacebookLoginController {

  // @ngInject
  constructor($stateParams:any, $window:ng.IWindowService, loginService) {
    if ($window.location.href.indexOf("?code=") > 0) {
      var url = $window.location.href;
      var start = url.indexOf("?code=") + 6;
      var end = url.indexOf("#/facebook/");
      var code = url.substr(start, end - start);

      console.log(code);
      loginService.loginWithFacebook(code)
        .then(data => console.log(data));

    } else {
      $window.location.href = "https://www.facebook.com/v2.8/dialog/oauth/?client_id=1770569109866535&redirect_uri=http://localhost:3000/%23/facebook/";
    }
  }
}