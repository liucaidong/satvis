import { ServiceWorkerManager } from "./modules/ServiceWorkerManager";
ServiceWorkerManager.registerAndUpdate();

import Vue from "vue";
import App from "./App.vue";
import router from "./components/Router";

const app = new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

// Export Vue for debugger
window.app = app;

/* global cc */
cc.sats.addFromTleUrl("data/tle/custom.txt", ["Custom"]);
cc.sats.addFromTleUrl("data/tle/resource.txt", ["Resource"]);
cc.sats.addFromTleUrl("data/tle/science.txt", ["Science"]);
cc.sats.addFromTleUrl("data/tle/stations.txt", ["Stations"]);
cc.sats.addFromTleUrl("data/tle/weather.txt", ["Weather"]);

cc.sats.enableTag("Custom");
cc.sats.enableTag("Stations");
cc.sats.enableTag("Weather");
