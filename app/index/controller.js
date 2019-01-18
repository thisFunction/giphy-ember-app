import Controller from "@ember/controller";
import {computed} from "@ember/object";

export default Controller.extend({
  searchQuery: "",
  submitDisabled: computed("searchQuery", function() {
    return this.searchQuery.length > 0 ? false : true;
  }),
  actions: {
    searchGifs() {
      if (!this.get("submitDisabled")) {
        let searchTerm = this.get("searchQuery");
        this.transitionToRoute("index.gifs", {
          queryParams: {search: searchTerm}
        });
        this.set("searchQuery", "");
      }
    }
  }
});
