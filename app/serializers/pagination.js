import DS from "ember-data";
import {underscore} from "@ember/string";

export default DS.RESTSerializer.extend({
  extractId(typeClass, hash) {
    let payload = {...hash, id: new Date().getTime()};
    return payload;
  },
  keyForAttribute(attr) {
    const newAttr = underscore(attr).toLowerCase();
    return newAttr;
  }
});
