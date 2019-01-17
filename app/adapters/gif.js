import DS from "ember-data";
import AdapterFetch from "ember-fetch/mixins/adapter-fetch";

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
  api_key: "CJJlnuT0vAt2j733vIkxgYGJbLN0OrZf",
  host: "http://api.giphy.com",
  namespace: "v1/gifs",
  urlForQuery(query, modelName) {
    switch (modelName) {
      case "repo":
        return `https://api.github.com/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
    ////todo: implement on method below

    //https://www.emberjs.com/api/ember-data/3.7/classes/DS.JSONAPIAdapter/methods/urlForQuery?anchor=urlForQuery

    //last 2 methods
  },
  query(store, type, query) {
    return fetch(
      `${this.host}/${this.namespace}/search?api_key=${this.api_key}&q=${
        query.q
      }`
    ).then(response => {
      return response.json();
    });
  }
});
