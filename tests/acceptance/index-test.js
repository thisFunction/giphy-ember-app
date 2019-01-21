import { module, test } from 'qunit';
import { visit, find, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('index page renders correct elements and element texts', async function(assert) {
    await visit('/');
    assert.ok(find('.giphy-search-section h1'));
    assert.equal(document.querySelector('.giphy-search-section h1').textContent.trim(), "Welcome to MyGiphy");
    assert.ok(find('.giphy-search-section input'));
    assert.ok(find('.giphy-search-section button:nth-of-type(1)'));
    assert.equal(document.querySelector('.giphy-search-section button:nth-of-type(1)').textContent.trim(), "SEARCH");
    assert.ok(find('.giphy-search-section button:nth-of-type(2)'));
    assert.equal(document.querySelector('.giphy-search-section button:nth-of-type(2)').textContent.trim(), "favorites");
    assert.equal(document.querySelector('.giphy-search-section h1').textContent.trim(), "Welcome to MyGiphy");
    assert.ok(find('.list-header'));
    assert.equal(document.querySelector('.list-header').textContent.trim(), "enter search term or look at favorites");
  });

  test('index page search button is disabled and enabled correctly', async function(assert) {
    await visit('/');
    assert.ok(document.querySelector('.giphy-search-section button:nth-of-type(1)').hasAttribute('disabled'));
    await fillIn('.giphy-search-section input', 'test');
    assert.notOk(document.querySelector('.giphy-search-section button:nth-of-type(1)').hasAttribute('disabled'));
    await fillIn('.giphy-search-section input', '');
    assert.ok(document.querySelector('.giphy-search-section button:nth-of-type(1)').hasAttribute('disabled'));
  });

  test('index page search returns giphy results', async function(assert) {
    await visit('/');
    await fillIn('.giphy-search-section input', 'test');
    await click('.giphy-search-section button:nth-of-type(1)');
    assert.equal(document.querySelector('.list-header').textContent.trim(), "search results");
    assert.ok(find('.giphy-list'));
  });

  test('pagination section and buttons are present after searching', async function(assert) {
    await visit('/');
    await fillIn('.giphy-search-section input', 'test');
    await click('.giphy-search-section button:nth-of-type(1)');
    assert.ok(find('.pagination'));
    assert.ok(find('.pagination .small:nth-of-type(1)'))
    assert.ok(find('.pagination .small:nth-of-type(2)'))
  });
});