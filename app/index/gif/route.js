import Route from "@ember/routing/route";
import {hash} from "rsvp";

export default Route.extend({
  model(params) {
    return hash({
      gif: this.store.queryRecord("gif-detail", {id: `${params.id}`}),
      favorites: this.store.findAll("favorite")
    });
  }
});
