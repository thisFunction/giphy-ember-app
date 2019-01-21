import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render, click} from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import stubService from "giphy-ember-app/tests/helpers/stub-service";

module("Integration | Component | pagination-section", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders pagination buttons correctly", async function(assert) {
    stubService("router", {
      currentRoute: {
        queryParams: {
          q: "test search",
          offset: 50
        }
      }
    });

    const pagination = {
      count: 25,
      offset: 50,
      totalCount: 1225
    };

    this.set("pagination", pagination);
    await render(hbs`{{pagination-section pagination=pagination}}`);

    assert.ok(this.element.querySelector("button:nth-of-type(1) i").className.includes("fa-arrow-circle-o-left"), "renders left arrow on previous button");
    assert.equal(this.element.querySelector("button:nth-of-type(1)").textContent.trim(), "previous", "renders correct text onprevious button");
    assert.ok(this.element.querySelector("button:nth-of-type(1) i").className.includes("fa-arrow-circle-o-left"), "renders left arrow on previous button");
    assert.equal(this.element.querySelector("button:nth-of-type(2)").textContent.trim(), "next", "renders correct text on next button");
  });

  test("it renders previous button disabled", async function(assert) {
    stubService("router", {
      currentRoute: {
        queryParams: {
          q: "test search",
          offset: 0
        }
      }
    });

    const pagination = {
      count: 25,
      offset: 0,
      totalCount: 1225
    };

    this.set("pagination", pagination);
    await render(hbs`{{pagination-section pagination=pagination}}`);

    assert.ok(this.element.querySelector("button:nth-of-type(1)").hasAttribute("disabled"), "renders disabled previous button");
    assert.notOk(this.element.querySelector("button:nth-of-type(2)").hasAttribute("disabled"), "renders active next button");
  });

  test("it renders next button disabled", async function(assert) {
    stubService("router", {
      currentRoute: {
        queryParams: {
          q: "test search",
          offset: 50
        }
      }
    });

    const pagination = {
      count: 25,
      offset: 50,
      totalCount: 75
    };
    this.set("pagination", pagination);
    await render(hbs`{{pagination-section pagination=pagination}}`);

    assert.ok(this.element.querySelector("button:nth-of-type(2)").hasAttribute("disabled"), "renders disabled next button");
    assert.notOk(this.element.querySelector("button:nth-of-type(1)").hasAttribute("disabled"), "renders active previous button");
  });

  test("it call transitionTo with correct query params to next page after clicking previous", async function(assert) {
    stubService("router", {
      currentRoute: {
        queryParams: {
          q: "test search",
          offset: 50
        }
      },
      transitionTo() {
        assert.equal(arguments[0], 'index.gifs')
        assert.deepEqual(arguments[1], {
          queryParams: {
            offset: 25,
            q: "test search"
          }
        })
      }
    });

    const pagination = {
      count: 25,
      offset: 50,
      totalCount: 90
    };

    this.set("pagination", pagination);
    await render(hbs`{{pagination-section pagination=pagination}}`);
    await click("button:nth-of-type(1)");
  });

  test("it call transitionTo with correct query params to previous page after clicking next", async function(assert) {
    stubService("router", {
      currentRoute: {
        queryParams: {
          q: "test search",
          offset: 50
        }
      },
      transitionTo() {
        assert.equal(arguments[0], 'index.gifs')
        assert.deepEqual(arguments[1], {
          queryParams: {
            offset: 75,
            q: "test search"
          }
        })
      }
    });

    const pagination = {
      count: 25,
      offset: 50,
      totalCount: 90
    };

    this.set("pagination", pagination);
    await render(hbs`{{pagination-section pagination=pagination}}`);
    await click("button:nth-of-type(2)");
  });
});
