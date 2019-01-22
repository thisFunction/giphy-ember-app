import Route from "@ember/routing/route";
import {hash} from "rsvp";

export default Route.extend({
  model(params) {
    return hash({
      gif: this.store.queryRecord("gif-detail", {id: `${params.id}`}),
      favorites: this.store.findAll("favorite")
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    // Implement your custom setup after
    controller.set('gif', model.gif);
    controller.set('favorites', model.favorites);

  }
});
