import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render, click} from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

const model = [
  {
    id: 1,
    userRating: 3,
    imageUrl: "https://media1.giphy.com/media/xUOwG5aFxxcLTVCaeQ/200.gif",
    giphyId: "1000"
  },
  {
    id: 2,
    userRating: 1,
    imageUrl: "https://media1.giphy.com/media/l0Iym8uibS5p0AJdC/200.gif",
    giphyId: "1000"
  },
  {
    id: 3,
    userRating: 4,
    imageUrl: "https://media1.giphy.com/media/xUOwG5aFxxcLTVCaeQ/200.gif",
    giphyId: "1000"
  },
  {
    id: 4,
    userRating: 5,
    imageUrl: "https://media1.giphy.com/media/l0Iym8uibS5p0AJdC/200.gif",
    giphyId: "1000"
  },
  {
    id: 5,
    userRating: 2,
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
    assert.equal(this.element.querySelectorAll("button").length, 3, "3 sorting buttons render");
  });

  test("it renders correct sorting button icon classes", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.ok(this.element.querySelector("button:nth-child(1)").firstElementChild.className.includes('fa-arrow-circle-o-up') , "first button renders font-awesome arrow circle up");
    assert.ok(this.element.querySelector("button:nth-child(2)").firstElementChild.className.includes('fa-dot-circle-o') , "first button renders font-awesome arrow circle up");
    assert.ok(this.element.querySelector("button:nth-child(3)").firstElementChild.className.includes('fa-arrow-circle-o-down') , "first button renders font-awesome arrow circle up");
  });

  test("it renders 5 giphy minature boxes", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating").length, 5, "5 minature boxes render");
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

  test("it renders giphy minatures in correct order when sorting ascending", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    await click('button:nth-of-type(1)');   
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star").length, 1, "1 filled stars for giphy minature with rating 1");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star-o").length, 4, "4 empty stars for giphy minature with rating 1");
  
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star").length, 2, "2 filled stars for giphy minature with rating 2");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star-o").length, 3, "3 empty stars for giphy minature with rating 3");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star").length, 3, "3 filled stars for giphy minature with rating 3");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star-o").length, 2, "2 empty stars for giphy minature with rating 3");

    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star").length, 4, "5 filled stars for giphy minature with rating 4");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star-o").length, 1, "2 empty stars for giphy minature with rating 4");

    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star").length, 5, "5 filled stars for giphy minature with rating 5");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star-o").length, 0, "0 empty stars for giphy minature with rating 5");
  });

  test("it renders giphy minatures in correct order when sorting descending", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);

    await click('button:nth-of-type(3)');   
  
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star").length, 5, "5 filled stars for giphy minature with rating 5");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star-o").length, 0, "0 empty stars for giphy minature with rating 5");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star").length, 4, "5 filled stars for giphy minature with rating 4");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star-o").length, 1, "2 empty stars for giphy minature with rating 4");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star").length, 3, "3 filled stars for giphy minature with rating 3");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star-o").length, 2, "2 empty stars for giphy minature with rating 3");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star").length, 2, "2 filled stars for giphy minature with rating 2");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star-o").length, 3, "3 empty stars for giphy minature with rating 3");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star").length, 1, "1 filled stars for giphy minature with rating 1");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star-o").length, 4, "4 empty stars for giphy minature with rating 1");
  });

  
  test("it renders giphy minatures in correct order when sorting default", async function(assert) {
    await render(hbs`{{giphy-minature-favorites favorites=model}}`);
    await click('button:nth-of-type(2)');   
  
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star").length, model[0].userRating, "3 filled stars for giphy minature with rating 3");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(1) .fa-star-o").length, 5 - model[0].userRating, "2 empty stars for giphy minature with rating 3");

    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star").length, model[1].userRating, "1 filled stars for giphy minature with rating 1");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(2) .fa-star-o").length, 5 - model[1].userRating, "4 empty stars for giphy minature with rating 1");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star").length, model[2].userRating, "4 filled stars for giphy minature with rating 4");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(3) .fa-star-o").length, 5 - model[2].userRating, "1 empty stars for giphy minature with rating 4");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star").length, model[3].userRating, "5 filled stars for giphy minature with rating 5");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(4) .fa-star-o").length, 5 - model[3].userRating, "0 empty stars for giphy minature with rating 5");
    
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star").length, model[4].userRating, "2 filled stars for giphy minature with rating 2");
    assert.equal(this.element.querySelectorAll(".giphy-minature-rating:nth-child(5) .fa-star-o").length, 5 - model[4].userRating, "4 empty stars for giphy minature with rating 2");
  });
});
