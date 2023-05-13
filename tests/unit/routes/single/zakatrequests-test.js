import { module, test } from 'qunit';
import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Route | single/zakatrequests', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:single/zakatrequests');
    assert.ok(route);
  });
});
