import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    searchGifs() {
      this.transitionTo("index.gifs");
    }
  }
});
