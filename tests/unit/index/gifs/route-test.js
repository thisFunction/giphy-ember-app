import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/gifs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/gifs');
    assert.ok(route);
  });
});
