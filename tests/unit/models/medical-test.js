import { module, test } from 'qunit';

import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Model | medical', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('medical', {});
    assert.ok(model);
  });
});
