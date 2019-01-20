import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | giphy-minature-favorites', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correct elements', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{giphy-minature-favorites}}`);

    assert.equal(this.element.textContent.trim(), 'three sorting buttons render');

  
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
