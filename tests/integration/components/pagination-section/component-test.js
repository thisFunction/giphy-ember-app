import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

const pagination = {
  count: 25,
  offset: 50,
  totalCount: 1225
};

module("Integration | Component | pagination-section", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set("pagination", pagination)
  });

  test("it renders pagination buttons correctly", async function(assert) {  
    this.set('nextPageButtonIsDisabled', false);
    this.set('previousPageButtonIsDisabled', false);
    await render(hbs`{{pagination-section pagination=pagination previousPageButtonIsDisabled=previousPageButtonIsDisabled nextPageButtonIsDisabled=nextPageButtonIsDisabled}}`);
    assert.ok(this.element.querySelector("button:nth-of-type(1) i").className.includes("fa-arrow-circle-o-left"), "renders left arrow on previous button");
    assert.equal(this.element.querySelector("button:nth-of-type(1)").textContent.trim(), "previous", "renders correct text onprevious button");
    assert.ok(this.element.querySelector("button:nth-of-type(1) i").className.includes("fa-arrow-circle-o-left"), "renders left arrow on previous button");
    assert.equal(this.element.querySelector("button:nth-of-type(2)").textContent.trim(), "next", "renders correct text on next button");
  });

  test("it renders previous button disabled", async function(assert) {
    this.set('nextPageButtonIsDisabled', false);
    this.set('previousPageButtonIsDisabled', true);
    await render(hbs`{{pagination-section pagination=pagination previousPageButtonIsDisabled=previousPageButtonIsDisabled nextPageButtonIsDisabled=nextPageButtonIsDisabled}}`);
    assert.ok(this.element.querySelector("button:nth-of-type(1)").hasAttribute("disabled"), "renders disabled previous button");
    assert.notOk(this.element.querySelector("button:nth-of-type(2)").hasAttribute("disabled"), "renders active next button");
  });

  test("it renders next button disabled", async function(assert) {
    this.set('nextPageButtonIsDisabled', true);
    this.set('previousPageButtonIsDisabled', false);
    await render(hbs`{{pagination-section pagination=pagination previousPageButtonIsDisabled=previousPageButtonIsDisabled nextPageButtonIsDisabled=nextPageButtonIsDisabled}}`);assert.ok(this.element.querySelector("button:nth-of-type(2)").hasAttribute("disabled"), "renders disabled next button");
    assert.notOk(this.element.querySelector("button:nth-of-type(1)").hasAttribute("disabled"), "renders active previous button");
  });
});
