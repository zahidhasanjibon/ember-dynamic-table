import { module, test } from 'qunit';

import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Adapter | admin panel', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:admin-panel');
    assert.ok(adapter);
  });
});
