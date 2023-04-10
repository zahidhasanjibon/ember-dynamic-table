import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'jakatt/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('tableData', {
      id: 'zakat',
      tableColumn: ['ID', 'name', 'address', 'phone', 'country'],
      data: [
        {
          _id: 1,
          name: 'md karim',
          address: 'dhaka',
          phone: '01732432',
          country: 'bangladesh',
        },
        {
          _id: 2,
          name: 'md rahim',
          address: 'dhaka',
          phone: '01732432',
          country: 'bangladesh',
        },
        {
          _id: 3,
          name: 'md kamal',
          address: 'dhaka',
          phone: '01732432',
          country: 'london',
        },
      ],
    });

    await render(hbs`<Table @tableData={{this.tableData}} />`);

    // assert.strictEqual(
    //   this.element.querySelectorAll('thead tr td').length,
    //   3,
    //   'two results rendered'
    // );
  });
});
