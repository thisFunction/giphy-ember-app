import Component from "@ember/component";
import {inject as service} from "@ember/service";
import {computed, get} from "@ember/object";

export default Component.extend({
  router: service(),
  itemsPerPage: 25,
  previousButtonDisabled: computed("router.currentRoute.queryParams.offset", "itemsPerPage", function(){
    let offset = Number(get(this, "router.currentRoute.queryParams.offset"));
    let itemsPerPage = get(this, "itemsPerPage");
    return !(offset - itemsPerPage >= 0)
}),
  actions: {
    next() {

      let searchParams = get(this, "router.currentRoute.queryParams.q");
      let offset = Number(get(this, "router.currentRoute.queryParams.offset"));
      let itemsPerPage = get(this, "itemsPerPage");

      this.get("router").transitionTo("index.gifs", {
        queryParams: {
          q: `${searchParams}`,
          offset: offset + itemsPerPage
        }
      });
    },
    previous() {
      let searchParams = get(this, "router.currentRoute.queryParams.q");
      let offset = Number(get(this, "router.currentRoute.queryParams.offset"));
      let itemsPerPage = get(this, "itemsPerPage");
      
      let prevPage = offset - itemsPerPage >= 0 ? offset - itemsPerPage : 0;

      this.get("router").transitionTo("index.gifs", {
        queryParams: {
          q: `${searchParams}`,
          offset: prevPage
        }
      });
    }
  }
});
