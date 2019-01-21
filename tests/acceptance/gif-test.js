import { module, test } from 'qunit';
import { visit, find, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | gif', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function(){
    const giphyId = 'l0Iym8uibS5p0AJdC'
    await visit(`/gif/${giphyId}`);
    await click('.rating-panel .rating-star:nth-of-type(4)');
  })

  test('gif detail page renders correct elements and element texts', async function(assert) {
    await visit('/gif/l0Iym8uibS5p0AJdC');

    assert.ok(find('.giphy-details'));
    assert.equal(document.querySelectorAll('.detail-section').length, 4);
    assert.equal(document.querySelectorAll('.detail-section-button').length, 1);
    assert.equal(document.querySelector('.detail-section:nth-of-type(1) .giphy-meta').textContent.trim(), "title:");
    assert.equal(document.querySelector('.detail-section:nth-of-type(2) .giphy-meta').textContent.trim(), "date:");
    assert.equal(document.querySelector('.detail-section:nth-of-type(3) .giphy-meta').textContent.trim(), "url:");
    assert.equal(document.querySelector('.detail-section:nth-of-type(4) .giphy-meta').textContent.trim(), "my rating:");
    assert.ok(find('.giphy-detail-image img'));
  });
});