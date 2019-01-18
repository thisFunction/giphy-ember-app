import DS from "ember-data";
const {RESTSerializer} = DS;
import {underscore} from "@ember/string";

export default RESTSerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === "data") {
      return this._super(payloadKey.replace("data", "gif-detail"));
    } else {
      return this._super(payloadKey);
    }
  },
  keyForAttribute(attr) {
    const newAttr = underscore(attr).toLowerCase();
    return newAttr;
  }
});
