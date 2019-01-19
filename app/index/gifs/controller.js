import Controller from "@ember/controller";
import { computed } from "@ember/object"
import { inject } from '@ember/service';

export default Controller.extend({
  store:  inject(),

  q: null,  
  offset: null,
  pagination: computed('pagination', function() {
    return this.get('store').peekRecord('pagination', 0)
  })
});
