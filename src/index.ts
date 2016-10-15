import {App} from "./App";
import "./facebook/facebook.module";
import "./styles/styles.css!";

App.element(document).ready(() => {
  App.bootstrap(document, [
    "fe",
    "fe.facebook"
  ]);
});
