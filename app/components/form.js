import { action } from '@ember/object';
import Component from '@glimmer/component';
import profile from '../models/profile';

export default class FormComponent extends Component {
  profile = profile;
  @action save() {
    profile.validate().then(({ validations }) => {
      console.log(validations);
    });
  }
  @action clic() {
    console.log(this);
  }
}
