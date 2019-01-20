import Controller from "@ember/controller";
import {get, computed} from "@ember/object";

export default Controller.extend({
  didReceiveAttrs() {
    this._super(...arguments);
  debugger
  },
  currentGiphyId: computed("model.gif.id", function() {
    return get(this, "model.gif.id");
  }),
  giphyIsFavorite: computed(
    "model.favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      debugger
      const favorites = this.store.peekRecord("favorite", giphyId);
      return favorites;
    }
  ),
  userRating: computed(
    "model.favorites.@each.userRating",
    "currentGiphyId",
    function() {
      const giphyId = get(this, "currentGiphyId");
      const favorites = this.store.peekRecord("favorite", giphyId);
      return favorites ? favorites.userRating : 0;
    }
  ),
  actions: {
    clickStar(rating) {
      const userRating = rating.rating;
      const giphyId = get(this, "currentGiphyId");
      const favorites = get(this, "giphyIsFavorite");
      if (favorites) {
        this.store.findRecord("favorite", giphyId).then(function(record) {
          record.set("userRating", userRating);
          record.save();
        });
      } else {
        const giphyUrl = get(this, "model.gif.url");
        const imageUrl = get(this, "model.gif.images.fixed_height.url");

        const newFavorite = this.store.createRecord("favorite", {
          userRating: userRating,
          id: giphyId,
          giphyUrl: giphyUrl,
          imageUrl: imageUrl
        });
        newFavorite.save();
      }
    },
    removeFromFavorites() {
      const giphyId = get(this, "currentGiphyId");
      this.store
        .findRecord("favorite", giphyId, {backgroundReload: false})
        .then(function(record) {
          record.deleteRecord();
          record.save();
        });
    }
  }
});
