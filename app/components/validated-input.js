import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ValidatedInput extends Component {
  @tracked showValidations = false;

  get notValidating() {
    return !this.validation.isValidating;
  }
  get hasContent() {
    return !!this.value;
  }
  get hasWarnings() {
    return !!this.validation.warnings;
  }
  get isValid() {
    return this.hasContent && this.validation.isTruelyValid;
  }
  get shouldDisplayValidations() {
    return this.showValidations || this.args.didValidate || this.hasContent;
  }
  get showErrorClass() {
    return (
      this.notValidating &&
      this.showErrorMessage &&
      this.hasContent &&
      this.validation
    );
  }
  get showErrorMessage() {
    return this.shouldDisplayValidations && this.validation.isInvalid;
  }
  get showWarningMessage() {
    return this.shouldDisplayValidations && this.hasWarnings && this.isValid;
  }
  get validation() {
    // console.log('model', this.args.model.get(`validations.attrs.firstName`));
    // console.log('model', this.args.model);
    // console.log('set', this.args.model.set('firstName', 'jibo'));
    return this.args.model.get(`validations.attrs.${this.args.valuePath}`);
  }
  get value() {
    // console.log('fName', this.args.model.get('firstName'));
    // console.log('model', this.args.model);
    return this.args.model.get(this.args.valuePath);
  }

  get classes() {
    let classes = [];
    if (this.showErrorClass) {
      classes.push('has-error');
    }
    if (this.isValid) {
      classes.push('has-success');
    }
    return classes.join(' ');
  }

  @action
  focusOut() {
    this.showValidations = true;
  }

  @action
  updateValue(event) {
    this.args.model.set(this.args.valuePath, event.target.value);
  }
}
