import Route from "@ember/routing/route";

export default Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    },
    offset: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.search === null) {
      return this.store.query("gif", {offset: 0, q: "funny"});
    } else {
      return this.store.query("gif", params);
    }
  },
  actions: {
    loading(transition) {
      const controller = this.controllerFor("index.gifs");
      controller.set("currentlyLoading", true);
      transition.promise.finally(function() {
        controller.set("currentlyLoading", false);
      });
    }
  }
});
