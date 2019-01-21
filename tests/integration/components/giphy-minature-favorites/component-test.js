import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

const model = [
  {
    id: 1,
    userRating: 3,
    imageUrl: "https://media1.giphy.com/media/xUOwG5aFxxcLTVCaeQ/200.gif",
    giphyId: "1000"
  },
  {
    id: 3,
    userRating: 1,
    imageUrl: "https://media1.giphy.com/media/l0Iym8uibS5p0AJdC/200.gif",
    giphyId: "1000"
  }
];

module("Integration | Component | giphy-minature-favorites", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set("model", model)
  });

  test("it renders 3 sorting buttons with correct css classes", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.equal(this.element.querySelectorAll(".small").length, 3, "three sorting buttons render");
  });

  test("it renders correct sorting button icon classes", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.ok(this.element.querySelector(".small:nth-child(1)").firstElementChild.className.includes('fa-arrow-circle-o-up') , "first button renders font-awesome arrow circle up");
    assert.ok(this.element.querySelector(".small:nth-child(2)").firstElementChild.className.includes('fa-dot-circle-o') , "first button renders font-awesome arrow circle up");
    assert.ok(this.element.querySelector(".small:nth-child(3)").firstElementChild.className.includes('fa-arrow-circle-o-down') , "first button renders font-awesome arrow circle up");
  });

  test("it renders 2 giphy minature boxes", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating").length, 2, "two minature boxes render");
  });

  test("it renders correct amount of stars for giphy minature 1", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star").length, 3, "3 filled stars for giphy minature 1 render");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star-o").length, 2, "3 empty stars for giphy minature 1 render");
  });

  test("it renders correct amount of stars for giphy minature 2", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);

    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star").length, 1, "1 filled stars for giphy minature 1 render");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star-o").length, 4, "4 empty stars for giphy minature 1 render");

  });
});
