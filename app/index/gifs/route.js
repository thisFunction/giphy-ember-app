import Route from "@ember/routing/route";
import {get} from '@ember/object';

export default Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    },
    offset: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query("gif", params);
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('pagination', this.get("store").peekRecord("pagination", model.query.offset));
  },
  actions: {
    loading(transition) {
      const controller = this.controllerFor("index.gifs");
      controller.set("currentlyLoading", true);
      transition.promise.finally(function() {
        controller.set("currentlyLoading", false);
      });
    }, 
    transitionToNextPage() {
      this.transitionTo("index.gifs", {
        queryParams: {
          q: get(this, 'controller.q'),
          offset: Number(get(this, 'controller.pagination.offset')) + get(this, 'controller.itemsPerPage'),
        }
      });
    },
    transitionToPreviousPage() {
      this.transitionTo("index.gifs", {
        queryParams: {
          q: get(this, 'controller.q'),
          offset: Number(get(this, 'controller.pagination.offset')) - get(this, 'controller.itemsPerPage'),
        }
      });
    }
  }
});
