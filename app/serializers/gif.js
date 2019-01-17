import DS from "ember-data";
import {decamelize} from "@ember/string";

export default DS.JSONAPISerializer.extend({
  attrs: {
    bitlyGifUrl: "bitly_gif_url",
    bitlyUrl: "years_old",
    embedUrl: "embed_url",
    sourcePostUrl: "source_post_url",
    sourceTld: "source_tld"
  }
});
