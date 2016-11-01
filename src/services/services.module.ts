import {App} from "../App";
import {stateService} from "./state.service";

const module:ng.IModule = App.module("lm");
module.service("stateService", stateService);