import Controller from "@ember/controller";

export default Controller.extend({
  queryParams: [{search : {
    scope: 'controller'
  }}],
  search: null
});
