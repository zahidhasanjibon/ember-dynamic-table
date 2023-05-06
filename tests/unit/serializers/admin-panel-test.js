import { module, test } from 'qunit';

import { setupTest } from 'jakatt/tests/helpers';

module('Unit | Serializer | admin panel', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('admin-panel');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('admin-panel', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
