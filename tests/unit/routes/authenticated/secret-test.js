import { module, test } from 'qunit';
import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Route | authenticated/secret', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authenticated/secret');
    assert.ok(route);
  });
});
