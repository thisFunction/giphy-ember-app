import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  urlForQueryRecord(query) {
    return `${this.host}/${this.namespace}/${query.id}?api_key=${this.api_key}`
  }
});
