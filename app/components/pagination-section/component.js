import Component from "@ember/component";

export default Component.extend({
  actions: {
    next() {
      this.nextPage();
    },
    previous() {
      this.previousPage();
    }
  }
});
