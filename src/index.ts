import {App} from "./App";
import "./login/login.module";
import "./services/services.module";
import "./styles/styles.css!";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "lm"
  ]);
});
