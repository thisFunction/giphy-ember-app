import Controller from "@ember/controller";
import {computed, get} from "@ember/object";

export default Controller.extend({
  searchQuery: "",
  submitDisabled: computed("searchQuery", function() {
    return this.searchQuery.length > 0 ? false : true;
  }),
  actions: {
    searchGiphy() {
      let searchQuery = get(this, 'searchQuery');
      this.transitionToRoute("index.gifs", {
        queryParams: {
          q: `${searchQuery}`,
          offset: 0
        }
      });
    },
    favorites() {
      this.transitionToRoute("index.favorites");
    }
  }
});
