import DS from "ember-data";
import {computed, get} from '@ember/object';

export default DS.Model.extend({
  images: DS.attr(),
  title: DS.attr('string'),
  imageUrl: computed('images', function(){
    return get(this, 'images.preview_gif.url') ? get(this, 'images.preview_gif.url') : get(this, 'images.original.url')
  }) 
});
