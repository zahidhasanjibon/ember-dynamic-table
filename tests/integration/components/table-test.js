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
      tableColumn: [
        'ID',
        'name',
        'address',
        'phone',
        'country',
        'lan',
        'money',
        'book',
        'pen',
        'apple',
      ],
      data: [
        {
          _id: 1,
          name: 'md karim',
          address: 'dhaka',
          phone: '01732432',
          country: 'bangladesh',
          lan: 'ed',
          money: '2323',
          book: '234',
          pen: 'werw',
          apple: 'effa',
        },
        {
          _id: 2,
          name: 'md rahim',
          address: 'dhaka',
          phone: '01732432',
          country: 'bangladesh',
          lan: 'ed',
          money: '2323',
          book: '234',
          pen: 'werw',
          apple: 'effa',
        },
        {
          _id: 3,
          name: 'md kamal',
          address: 'dhaka',
          phone: '01732432',
          country: 'london',
          lan: 'ed',
          money: '2323',
          book: '234',
          pen: 'werw',
          apple: 'effa',
        },
      ],
    });

    await render(hbs`<Table @tableData={{this.tableData}} />`);

    assert.strictEqual(
      this.element.querySelectorAll('thead tr td').length,
      11,
      '11 table column results rendered ok'
    );
    assert.strictEqual(
      this.element.querySelectorAll('tbody tr td').length,
      33,
      '33 table body td results rendered ok'
    );

    assert.dom('thead').exists();
    assert.dom('#selectAction1').exists();
    assert.dom('#selectAction2').exists();
  });
});
