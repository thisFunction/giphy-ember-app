import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("index", {path: "/"}, function() {
    this.route("gifs", function() {});
    this.route('gif', {path: "/gif/:id"});
  })
});

export default Router;
