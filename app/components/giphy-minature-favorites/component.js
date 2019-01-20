import Component from "@ember/component";
import {get, computed, set} from "@ember/object";
import {sort} from "@ember/object/computed";

export default Component.extend({
  modelArray: computed("favorites", function() {
    return get(this, "favorites").toArray();
  }),
  // modelArrayWithoutDeleted: computed('modelArray', function(){
  //   return get(this, 'modelArray').filter(item => !item.isDeleted)
  // }),
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
        set(this, 'modelArray', get(this, "favorites").toArray());
     },
    emptyClick() {
      //noop
      //necessary for ember-cli-star-rating to work properly
    }
  }
});
