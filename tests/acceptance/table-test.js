import { click, currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'jakatt/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | table', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /table', async function (assert) {
    await visit('/dashboard');

    assert.strictEqual(currentURL(), '/dashboard');

    await click('[data-test-loan-btn]');
    assert.dom('[data-test-loan-btn]').hasClass('active');
  });
});
