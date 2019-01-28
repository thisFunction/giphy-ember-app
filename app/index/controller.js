import Controller from "@ember/controller";
import {get, computed} from "@ember/object";
import {not} from "@ember/object/computed";

export default Controller.extend({
  searchQuery: "",
  queryHasValue: computed("searchQuery.length", function(){
    return get(this, 'searchQuery').trim().length;
  }),
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
