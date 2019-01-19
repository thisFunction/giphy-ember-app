import DS from "ember-data";
import {underscore} from "@ember/string";

export default DS.RESTSerializer.extend({
  normalize(typeHash, hash) {
    const payload = {...hash}
    payload.id = payload.offset;
    return this._super(typeHash, payload);
  },
  keyForAttribute(attr) {
    const newAttr = underscore(attr).toLowerCase();
    return newAttr;
  }
});
