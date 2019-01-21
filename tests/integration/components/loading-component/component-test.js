import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loading-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{loading-component}}`);

    assert.equal(this.element.querySelector(".list-header").textContent.trim(), 'Search results')
    assert.ok(this.element.querySelector("i").className.includes('fa-spin'))
  });
});
