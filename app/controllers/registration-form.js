import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class RegistrationFormController extends Controller {
  @action submit(model) {
    if (model.get('validations').isValid) {
      console.log('in');
    }
  }
}
