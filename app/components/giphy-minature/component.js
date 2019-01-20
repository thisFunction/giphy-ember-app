import Component from "@ember/component";
import {get, computed} from "@ember/object";

export default Component.extend({
  modelArray: computed("favorites", function() {
    return get(this, "favorites").toArray();
  })
});
