import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class LoginController extends Controller {
  @service session;
  @tracked userName = '';
  @tracked password = '';
  @tracked error = '';

  @action
  async submit(e) {
    e.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:token',
        this.userName,
        this.password
      );
      // console.log('transition', this.previousTrans);
      // let previousTransition = this.previousTrans;
      // if (previousTransition) {
      //   this.previousTransition = null;
      //   previousTransition.retry();
      // } else {
      //   // Default back to homepage
      //   this.router.transitionTo('index');
      // }
    } catch (error) {
      this.error = error;
    }
  }
}
