import Controller from "@ember/controller";
import {get, computed} from "@ember/object";
import { alias } from "@ember/object/computed";

export default Controller.extend({
  currentGiphyId: alias("gif.id"),
  giphyIsFavorite: computed("favorites.@each.userRating", "currentGiphyId", function() {
    const giphyId = get(this, "currentGiphyId");
    return get(this, "favorites").toArray().filter(item => item.giphyId === giphyId);
  }),
  userRating: computed("favorites.@each.userRating", "currentGiphyId", function() {
    const giphyId = get(this, "currentGiphyId");
    const favoritesArray = this.get("favorites").toArray();
    const favoriteItem = favoritesArray.filter(item => item.giphyId == giphyId);
    return favoriteItem.length ? favoriteItem[0].userRating : 0;
  }),
  isFavorite: computed("giphyIsFavorite.@each.id", function() {
    return get(this, "giphyIsFavorite.0.id") !== undefined
  }),
  actions: {
    clickStar(rating) {
      const giphyIsFavoriteArray = get(this, "giphyIsFavorite");
      if (giphyIsFavoriteArray.length) {
        this.store.findRecord("favorite", giphyIsFavoriteArray[0].id).then(function(record) {
          record.set("userRating", rating.rating);
          record.save();
        });
      } else {
        const newFavorite = this.store.createRecord("favorite", {
          userRating: rating.rating,
          giphyId: get(this, "currentGiphyId"),
          giphyUrl: get(this, "gif.url"),
          imageUrl: get(this, "gif.imageUrl"),
          title: get(this, "gif.title")
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
