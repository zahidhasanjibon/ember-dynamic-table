import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'jakatt/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | profile-form', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    const model = this.owner
      .lookup('service:store')
      .createRecord('profile', {});
    this.set('model', model);
  });
  test('it renders', async function (assert) {
    await render(hbs`<ProfileForm @model={{this.model}} />`);

    assert.dom('.img-fluid').exists();
    assert.dom('img').hasClass('img-fluid');
    assert.dom('.file-input').exists();
    assert.dom('.form-control').exists({ count: 6 });

    await fillIn('[data-test-input="fName"]', 'zahid');

    assert.dom('[data-test-input="fName"]').hasValue('zahid');

    await fillIn('[data-test-input="lName"]', 'hasan');
    assert.dom('[data-test-input="lName"]').hasValue('hasan');

    // assert.dom('.save-btn').hasAttribute('disabled', '');

    await fillIn('[data-test-input="number"]', '43243242');
    assert.dom('[data-test-input="number"]').hasValue('43243242');
    await fillIn('[data-test-input="email"]', 'test@gmail.com');
    assert.dom('[data-test-input="email"]').hasValue('test@gmail.com');
    await fillIn('[data-test-input="comment"]', 'testcomment');
    assert.dom('[data-test-input="comment"]').hasValue('testcomment');
    await fillIn('[data-test-input="designation"]', 'testdesignation');
    assert.dom('[data-test-input="designation"]').hasValue('testdesignation');

    await click('.save-btn');
  });
});
