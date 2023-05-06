import { module, test } from 'qunit';
import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Route | admin-panel', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:admin-panel');
    assert.ok(route);
  });
});
