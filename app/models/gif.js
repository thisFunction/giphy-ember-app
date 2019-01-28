import DS from "ember-data";
import {computed, get} from "@ember/object";

export default DS.Model.extend({
  title: DS.attr("string"),
  importDatetime: DS.attr('date'),
  url: DS.attr("string"),
  images: DS.attr(),
  imageUrl: computed('images', function(){
    return get(this, 'images.original.url');
  }),
  previewImageUrl: computed('images', function(){
    return get(this, 'images.preview_gif.url') ? get(this, 'images.preview_gif.url') : get(this, 'imageUrl')
  }) 
});
