import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | favorite', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:favorite');
    assert.ok(adapter);
  });
});
