import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  urlForQuery() {
    return `${this.host}/${this.namespace}/search?api_key=${this.api_key}`;
  }
});
