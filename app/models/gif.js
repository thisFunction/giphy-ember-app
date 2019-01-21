import DS from "ember-data";
import {computed, get} from '@ember/object';

export default DS.Model.extend({
  images: DS.attr(),
  imageUrl: computed('images', function(){
    return get(this, 'images.preview_gif.url');
  }) 
});
