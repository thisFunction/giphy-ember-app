import DS from "ember-data";

export default DS.RESTAdapter.extend({
  api_key: "CJJlnuT0vAt2j733vIkxgYGJbLN0OrZf",
  host: "https://api.giphy.com",
  namespace: "v1/gifs"
});
