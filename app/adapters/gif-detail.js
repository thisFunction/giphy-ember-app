import ApplicationAdapter from "./application";
import {Promise} from "rsvp";
import $ from "jquery";

export default ApplicationAdapter.extend({
  queryRecord(store, type, query) {
    let host = this.host;
    let namespace = this.namespace;
    let api_key = this.api_key;
    return new Promise(function(resolve, reject) {
      $.getJSON(
        `${host}/${namespace}/${query.id}?api_key=${api_key}`
      ).then(
        function(data) {
          resolve(data);
        },
        function(jqXHR) {
          reject(jqXHR);
        }
      );
    });
  }
});