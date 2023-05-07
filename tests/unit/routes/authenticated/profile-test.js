import { module, test } from 'qunit';
import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Route | authenticated/profile', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authenticated/profile');
    assert.ok(route);
  });
});
