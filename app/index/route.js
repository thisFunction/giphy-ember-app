import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    searchGifs() {
      const searchTerm = this.controller.searchQuery;
      this.transitionTo("index.gifs", {
        queryParams: {search: searchTerm}
      });
      this.controller.set("searchQuery", "");
    }
  }
});
