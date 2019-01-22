import DS from "ember-data";
import {computed, get} from "@ember/object";

export default DS.Model.extend({
  type: DS.attr("string"),
  title: DS.attr("string"),
  importDatetime: DS.attr('date'),
  url: DS.attr("string"),
  images: DS.attr(),
  imageUrl: computed('images', function(){
    return get(this, 'images.original.url');
  }),
  titleNoGif: computed("title", function() {
    const title = this.get("title");
    return title.replace(" GIF","")
  })
});
