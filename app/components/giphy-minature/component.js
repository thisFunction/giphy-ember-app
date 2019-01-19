import Component from "@ember/component";
import {get, computed, set} from "@ember/object";
import {sort} from "@ember/object/computed";

export default Component.extend({
  modelArray: computed("favorites", function() {
    return get(this, "favorites").toArray();
  }),
  favoritesSortingDescending: Object.freeze(["userRating:desc"]),
  sortedFavoritesDescending: sort("modelArray", "favoritesSortingDescending"),
  favoritesSortingAscending: Object.freeze(["userRating:asc"]),
  sortedFavoritesAscending: sort("modelArray", "favoritesSortingAscending"),
  actions: {
    sortFavoritesDescending() {
       set(this, 'modelArray', get(this, "sortedFavoritesDescending"));
    },
    sortFavoritesAscending() {
        set(this, 'modelArray', get(this, "sortedFavoritesAscending"));
     },
     unsortFavorites() {
        return get(this, "favorites").toArray();
     },
    emptyClick() {
      //noop
      //necessary for ember-cli-star-rating to work properly
    }
  }
});
