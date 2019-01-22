import Controller from "@ember/controller";
import {get, computed} from "@ember/object";

export default Controller.extend({
  currentGiphyId: computed("gif.id", function() {
    return get(this, "gif.id");
  }),
  giphyIsFavorite: computed(
    "favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      return get(this, "favorites")
        .toArray()
        .filter(item => item.giphyId === giphyId);
    }
  ),
  userRating: computed(
    "favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      const model = this.get("favorites").toArray();
      const favoriteItem = model.filter(item => item.giphyId == giphyId);
      return favoriteItem.length ? favoriteItem[0].userRating : 0;
    }
  ),
  isFavorite: computed("giphyIsFavorite.@each.id", function() {
    return get(this, "giphyIsFavorite.0.id") !== undefined
  }),
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
        const giphyUrl = get(this, "gif.url");
        const imageUrl = get(this, "gif.images.fixed_height.url");
        const imageTitle = get(this, "gif.title");
        const newFavorite = this.store.createRecord("favorite", {
          userRating: userRating,
          giphyId: giphyId,
          giphyUrl: giphyUrl,
          imageUrl: imageUrl,
          title: imageTitle
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
    },
    addToFavorites(){
      this.send('clickStar', {rating:0})
    }
  }
});
