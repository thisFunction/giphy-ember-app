import Controller from "@ember/controller";
import { computed, get } from "@ember/object"
import { inject } from '@ember/service';

export default Controller.extend({
  store:  inject(),

  q: null,  
  offset: null,
  pagination: computed('store.offset','model.query.offset', function() {
    const offset = get(this, 'model.query.offset');
    return this.get('store').peekRecord('pagination', offset)
  })
});
