import { module, test } from 'qunit';
import { setupRenderingTest } from 'jakatt/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | zakat-request/zakat-request-table-tr',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<ZakatRequest::ZakatRequestTableTr />`);

      assert.dom(this.element).hasText('');

      // Template block usage:
      await render(hbs`
      <ZakatRequest::ZakatRequestTableTr>
        template block text
      </ZakatRequest::ZakatRequestTableTr>
    `);

      assert.dom(this.element).hasText('template block text');
    });
  }
);
