import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const model = [
  {
    id: "1",
    imageUrl: "https://media1.giphy.com/media/xUOwG5aFxxcLTVCaeQ/200.gif"
  },
  {
    id:"2",
    imageUrl: "https://media1.giphy.com/media/l0Iym8uibS5p0AJdC/200.gif"
  },
  {
    id: "3",
    imageUrl: "https://media0.giphy.com/media/DczriEIWjJ9q8/200.gif"
  },
  {
    id: "4",
    imageUrl: "https://media3.giphy.com/media/l0MYuXX9btbEsA2S4/200.gif"
  }
];

module('Integration | Component | giphy-minature', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set("model", model)
  });

  test('it renders 4 links with giphy-minautre class', async function(assert) {
    await render(hbs`{{giphy-minature searchResults=model}}`);
    assert.equal(this.element.querySelectorAll(".giphy-minature").length, 4, "4 giphy minature elements render");
  });

  test('it renders image with correct image src inside each giphy-minautre', async function(assert) {
    await render(hbs`{{giphy-minature searchResults=model}}`);
    const giphyMinatures = this.element.querySelectorAll(".giphy-minature");
    
    assert.ok(giphyMinatures[0].firstElementChild.getAttribute("src") === model[0].imageUrl);
    assert.ok(giphyMinatures[1].firstElementChild.getAttribute("src") === model[1].imageUrl);
    assert.ok(giphyMinatures[2].firstElementChild.getAttribute("src") === model[2].imageUrl);
    assert.ok(giphyMinatures[3].firstElementChild.getAttribute("src") === model[3].imageUrl);
  });
});
