import { module, test } from 'qunit';
import { setupRenderingTest } from 'jakatt/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UserTable />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <UserTable>
        template block text
      </UserTable>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
