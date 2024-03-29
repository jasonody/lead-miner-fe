/// <reference path="../typings/globals/jquery/index.d.ts" />
/// <reference path="../typings/globals/angular/index.d.ts" />
/// <reference path="../typings/globals/angular-ui-router/index.d.ts" />
/// <reference path="../typings/globals/toastr/index.d.ts" />

/* tslint:disable:variable-name */

import * as angular from "angular";
import "angular-ui-router";
import "bootstrap";
import "bootstrap/css/bootstrap.css!";

const App:ng.IAngularStatic = angular;

App.module("lm", [
  "ui.router"
]);

export {App};
