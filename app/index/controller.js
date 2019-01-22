import Controller from "@ember/controller";
import {get} from "@ember/object";
import {gt, not} from "@ember/object/computed";

export default Controller.extend({
  searchQuery: "",
  queryHasValue: gt("searchQuery.length", 0),
  submitDisabled: not("queryHasValue"),
  actions: {
    searchGiphy() {
      this.transitionToRoute("index.gifs", {
        queryParams: {
          q: `${get(this, "searchQuery")}`,
          offset: 0
        }
      });
    },
    favorites() {
      this.transitionToRoute("index.favorites");
    }
  }
});
