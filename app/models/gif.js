import DS from "ember-data";

export default DS.Model.extend({
  // bitlyGifUrl: DS.attr("string"),
  // bitlyUrl: DS.attr("string"),
  // embedUrl: DS.attr("string"),
  slug: DS.attr("string"),
  source: DS.attr("string")
  // sourcePostUrl: DS.attr("string"),
  // sourceTld: DS.attr("string")
});
