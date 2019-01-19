import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.queryRecord("gif-detail", {id: params.id} );
      },
      setupController(controller, model){
        controller.set('gif', model);
      }
});
