import Route from "@ember/routing/route";

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.search === null) {
      return this.store.query("gif", "funny");
    } else {
      return this.store.query("gif", params.search);
    }
  }
});
