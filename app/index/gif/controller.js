import Controller from "@ember/controller";
import {get, computed} from "@ember/object";

export default Controller.extend({
  currentGiphyId: computed("model.gif.id", function() {
    return get(this, "model.gif.id");
  }),
  giphyIsFavorite: computed(
    "model.favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      return get(this, "model.favorites")
        .toArray()
        .filter(item => item.giphyId === giphyId);
    }
  ),
  userRating: computed(
    "model.favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      const model = this.get("model.favorites").toArray();
      const favoriteItem = model.filter(item => item.giphyId == giphyId);
      return favoriteItem.length ? favoriteItem[0].userRating : 0;
    }
  ),
  actions: {
    clickStar(rating) {
      const userRating = rating.rating;
      const giphyId = get(this, "currentGiphyId");
      const favorites = get(this, "giphyIsFavorite");
      if (favorites.length) {

        this.store.findRecord("favorite", favorites[0].id).then(function(record) {
          record.set("userRating", userRating);
          record.save();
        });
      } else {
        const giphyUrl = get(this, "model.gif.url");
        const imageUrl = get(this, "model.gif.images.fixed_height.url");

        const newFavorite = this.store.createRecord("favorite", {
          userRating: userRating,
          giphyId: giphyId,
          giphyUrl: giphyUrl,
          imageUrl: imageUrl
        });
        newFavorite.save();
      }
    },
    removeFromFavorites() {
      const favoritesRecordId = get(this, "giphyIsFavorite.0.id");
      
      this.store.findRecord("favorite", favoritesRecordId).then(function(record) {
        record.destroyRecord();
        record.save();
      });
      this.store.unloadAll("favorites");
    }
  }
});
