import {App} from "./App";
import "./login/login.module";
import "./styles/styles.css!";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "lm"
  ]);
});
