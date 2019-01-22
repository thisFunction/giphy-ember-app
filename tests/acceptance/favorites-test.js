import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | favorites', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function(){
    await visit('/gif/l0Iym8uibS5p0AJdC');
    await click('.rating-panel span:nth-of-type(3)');
  });

  test('favorites page renders correct elements and element texts', async function(assert) {
    await visit('/favorites');
    assert.ok(find('.list-header'));
    assert.equal(document.querySelector('.list-header').textContent.trim(), "favorites");
    assert.ok(find('.buttons-small button:nth-of-type(1)'));
    assert.equal(document.querySelector('.buttons-small button:nth-of-type(1)').textContent.trim(), "sort");
    assert.ok(find('.buttons-small button:nth-of-type(2)'));
    assert.equal(document.querySelector('.buttons-small button:nth-of-type(2)').textContent.trim(), "sort");
    assert.ok(find('.buttons-small button:nth-of-type(3)'));
    assert.equal(document.querySelector('.buttons-small button:nth-of-type(3)').textContent.trim(), "sort");
    assert.ok(find('.giphy-list'));
    assert.equal(document.querySelector('.giphy-list a').children[0].tagName, "IMG");
    assert.ok(document.querySelector('.giphy-list a').children[1].className.includes('rating-panel'));
    assert.equal(document.querySelectorAll('.giphy-list a:first-of-type .rating-panel .rating-star').length, 5);
  });
});