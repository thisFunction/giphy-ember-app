import Controller from "@ember/controller";
import {computed, get} from "@ember/object";
import {inject} from "@ember/service";

export default Controller.extend({
  store: inject(),
  q: null,
  offset: null,
  pagination: computed("store.offset", "model.query.offset", function() {
    const offset = get(this, "model.query.offset");
    return this.get("store").peekRecord("pagination", offset);
  }),


  /// From pagination Component

  itemsPerPage: computed("pagination.count", function() {
    return Number(get(this, "pagination.count"));
  }),
  offset: computed("router.currentRoute.queryParams.offset", function() {
    return Number(get(this, "router.currentRoute.queryParams.offset"));
  }),
  totalItemCount: alias("pagination.totalCount"),
  searchParams: alias("router.currentRoute.queryParams.q"),
  previousButtonDisabled: computed("router.currentRoute.queryParams.offset", "itemsPerPage", function() {
    const offset = get(this, "offset");
    const itemsPerPage = get(this, "itemsPerPage");
    return !(offset - itemsPerPage >= 0);
  }),
  nextButtonDisabled: computed("router.currentRoute.queryParams.offset", "itemsPerPage", "pagination.totalCount", function() {
    const offset = get(this, "offset");
    const itemsPerPage = get(this, "itemsPerPage");
    const totalItemCount = Number(get(this, "pagination.totalCount"));
    return offset + itemsPerPage >= totalItemCount;
  }),
  transitionToPage(offset) {
    const searchParams = get(this, "searchParams");
    this.get("router").transitionTo("index.gifs", {
      queryParams: {
        q: `${searchParams}`,
        offset: offset
      }
    });
  },

  ///
  actions: {
    nextPage() {
      debugger
    },

    previousPage() {
      debugger
    }
  }
});
