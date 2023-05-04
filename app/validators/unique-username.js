import BaseValidator from 'ember-cp-validations/validators/base';

const UniqueUsername = BaseValidator.extend({
  validate(value, options, model, attribute) {
    if (attribute === 'firstName' || attribute === 'lastName') {
      if (
        (model.firstName === '' || model.firstName == undefined) &&
        (model.lastName === '' || model.lastName == undefined)
      ) {
        return "first or last name can't be blank";
      } else {
        return true;
      }
    }
  },
});
UniqueUsername.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  },
});

export default UniqueUsername;
