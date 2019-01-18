import DS from 'ember-data'
import {computed} from '@ember/object'

export default DS.Model.extend({
    type: DS.attr("string"),
    rating: DS.attr("string"),
    images: DS.attr(),
    url: DS.attr('string'),
    title: DS.attr('string'),
    titleNoEnding: computed('title', function() {
        const title = this.get('title');
        return title.slice(0, title.length - 4);
      })
});
