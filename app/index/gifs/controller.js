import Controller from "@ember/controller";
import {computed, get} from "@ember/object";

export default Controller.extend({
  q: null,
  offset: null,
  itemsPerPage: 25,
  previousPageButtonIsDisabled: computed("pagination.offset", function() {
    return Number(get(this, "pagination.offset")) === 0;
  }),
  nextPageButtonIsDisabled: computed("pagination.{offset,count,totalCount}", function() {
    const offset = Number(get(this, "pagination.offset"));
    const itemsPerPage = get(this, "itemsPerPage");
    const totalItemCount = Number(get(this, "pagination.totalCount"));
    return offset + itemsPerPage >= totalItemCount;
  }),
  actions: {
    nextPage() {
      this.send("transitionToNextPage");
    },
    previousPage() {
      this.send("transitionToPreviousPage");
    }
  }
});
