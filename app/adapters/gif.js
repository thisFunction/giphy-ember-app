import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  namespace: "v1/gifs",
  urlForQuery() {
    return `${this.host}/${this.namespace}/search?api_key=${this.api_key}`;
  }
});
