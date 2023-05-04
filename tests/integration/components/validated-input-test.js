// import { isNone } from '@ember/utils';
import { fillIn, render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'jakatt/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | validated-input', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    const model = this.owner
      .lookup('service:store')
      .createRecord('profile', {});
    this.set('model', model);
  });

  test('basic input field validation firstName', async function (assert) {
    this.set('valuePath', 'firstName');
    this.set('testName', 'fName');
    this.set('type', 'text');
    this.set('placeholder', 'First Name');
    await render(hbs`
      <ValidatedInput
        @model={{this.model}}
        @valuePath={{this.valuePath}}
        @testName={{this.testName}}
        @type={{this.type}}
        @placeholder={{this.placeholder}}
      />
    `);
    assert.dom('input').exists();

    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="fName"]', 'jib');

    assert.dom('[data-test-input="fName"]').hasValue('jib');
    await triggerEvent('[data-test-input="fName"]', 'focusout');
    // await this.pauseTest();
    assert.dom('.error').doesNotExist();
    // assert
    //   .dom('.error')
    //   .hasText('firstName is too short (minimum is 5 characters)');
  });

  test('basic input field validation lastName', async function (assert) {
    this.set('valuePath', 'lastName');
    this.set('testName', 'lName');
    this.set('type', 'text');
    this.set('placeholder', 'last Name');
    await render(hbs`
      <ValidatedInput
        @model={{this.model}}
        @valuePath={{this.valuePath}}
        @testName={{this.testName}}
        @type={{this.type}}
        @placeholder={{this.placeholder}}
      />
    `);
    assert.dom('input').exists();

    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="lName"]', 'zahid');

    assert.dom('[data-test-input="lName"]').hasValue('zahid');
    await triggerEvent('[data-test-input="lName"]', 'focusout');
    // await this.pauseTest();
    assert.dom('.error').doesNotExist();
  });

  test('basic input field validation phone', async function (assert) {
    this.set('valuePath', 'phone');
    this.set('testName', 'number');
    this.set('type', 'number');
    this.set('placeholder', 'phone');
    await render(hbs`
      <ValidatedInput
        @model={{this.model}}
        @valuePath={{this.valuePath}}
        @testName={{this.testName}}
        @type={{this.type}}
        @placeholder={{this.placeholder}}
      />
    `);
    assert.dom('input').exists();

    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="number"]', '017');

    assert.dom('[data-test-input="number"]').hasValue('017');
    await triggerEvent('[data-test-input="number"]', 'focusout');
    // await this.pauseTest();
    assert.dom('.error').doesNotExist();
  });
  test('basic input field validation email', async function (assert) {
    this.set('valuePath', 'email');
    this.set('testName', 'email');
    this.set('type', 'email');
    this.set('placeholder', 'email');
    await render(hbs`
      <ValidatedInput
        @model={{this.model}}
        @valuePath={{this.valuePath}}
        @testName={{this.testName}}
        @type={{this.type}}
        @placeholder={{this.placeholder}}
      />
    `);
    assert.dom('input').exists();

    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="email"]', 'zahid@gmail.com');

    assert.dom('[data-test-input="email"]').hasValue('zahid@gmail.com');
    await triggerEvent('[data-test-input="email"]', 'focusout');
    // await this.pauseTest();
    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="email"]', '');
    await triggerEvent('[data-test-input="email"]', 'focusout');
    assert.dom('.error').exists();

    assert.dom('.error').hasText("email can't be blank");
  });
  test('basic input field validation designation', async function (assert) {
    this.set('valuePath', 'designation');
    this.set('testName', 'designation');
    this.set('type', 'text');
    this.set('placeholder', 'designation');
    await render(hbs`
      <ValidatedInput
        @model={{this.model}}
        @valuePath={{this.valuePath}}
        @testName={{this.testName}}
        @type={{this.type}}
        @placeholder={{this.placeholder}}
      />
    `);
    assert.dom('input').exists();

    assert.dom('.error').doesNotExist();

    await fillIn('[data-test-input="designation"]', 'designation test');

    assert.dom('[data-test-input="designation"]').hasValue('designation test');
    await triggerEvent('[data-test-input="designation"]', 'focusout');
    // await this.pauseTest();
    assert.dom('.error').exists();
    assert
      .dom('.error')
      .hasText('designation is too long (maximum is 15 characters)');
  });
});
