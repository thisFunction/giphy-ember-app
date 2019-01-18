import Component from "@ember/component";
import {get} from "@ember/object";
import {computed} from "@ember/object";

export default Component.extend({
  classNames: ["gify-minature"],
  attributeBindings: ["href"],
  tagName: "a",
  href: computed("images.preview_gif.url", function() {
    return get(this, "gif.images.preview_gif.url");
  })
});
