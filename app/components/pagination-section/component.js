import Component from "@ember/component";
import {inject as service} from "@ember/service";
import {computed, get} from "@ember/object";
import {alias} from "@ember/object/computed";

export default Component.extend({
  router: service(),
  itemsPerPage: computed("pagination.count", function() {
    return Number(get(this, "pagination.count"));
  }),
  offset: computed("router.currentRoute.queryParams.offset", function() {
    return Number(get(this, "router.currentRoute.queryParams.offset"));
  }),
  totalItemCount: alias("pagination.totalCount"),
  searchParams: alias("router.currentRoute.queryParams.q"),
  previousButtonDisabled: computed("router.currentRoute.queryParams.offset", "itemsPerPage", function() {
    let offset = get(this, "offset");
    let itemsPerPage = get(this, "itemsPerPage");
    return !(offset - itemsPerPage >= 0);
  }),
  nextButtonDisabled: computed("router.currentRoute.queryParams.offset", "itemsPerPage", "pagination.totalCount", function() {
    let offset = get(this, "offset");
    let itemsPerPage = get(this, "itemsPerPage");
    let totalItemCount = Number(get(this, "pagination.totalCount"));
    return offset + itemsPerPage >= totalItemCount;
  }),
  transitionToPage(offset) {
    let searchParams = get(this, "searchParams");
    this.get("router").transitionTo("index.gifs", {
      queryParams: {
        q: `${searchParams}`,
        offset: offset
      }
    });
  },
  actions: {
    next() {
      let nextPageOffset =
        Number(get(this, "router.currentRoute.queryParams.offset")) +
        get(this, "itemsPerPage");
      this.transitionToPage(nextPageOffset);
    },
    previous() {
      let offset = Number(get(this, "router.currentRoute.queryParams.offset"));
      let itemsPerPage = get(this, "itemsPerPage");
      let previousPageOffset = offset - itemsPerPage;
      this.transitionToPage(previousPageOffset);
    }
  }
});
