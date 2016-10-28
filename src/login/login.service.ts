export class loginService {
  private baseUri:string = "http://localhost:61343";

  // @ngInject
  constructor(private $http:ng.IHttpService) {

  }

  public loginWithFacebook(code:string):ng.IHttpPromise<{}> {
    
    return this.$http.post(this.baseUri + "/login/facebook/?code=" + code, { code });
  }
}