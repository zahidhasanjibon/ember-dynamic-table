import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'jakatt/tests/helpers';

module('Acceptance | table', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /table', async function (assert) {
    await visit('/table');

    assert.strictEqual(currentURL(), '/table');
  });
});
