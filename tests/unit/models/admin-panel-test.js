import { module, test } from 'qunit';

import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Model | admin panel', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('admin-panel', {});
    assert.ok(model);
  });
});
