import DS from "ember-data";

export default DS.RESTAdapter.extend({
  api_key: "CJJlnuT0vAt2j733vIkxgYGJbLN0OrZf",
  host: "http://api.giphy.com",
  namespace: "v1/gifs",
  urlForQuery(query, modelName) {
    debugger
    switch (modelName) {
      case "gif":
        return `${this.host}/${this.namespace}/search?api_key=${
          this.api_key
        }&q=${query}`;
      // case "gif":
      //     return `${this.host}/${this.namespace}/${id}?api_key=${
      //       this.api_key
      //     }&q=${query}`;
      default:
        return this._super(...arguments);
    }
  }
});
