import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  async beforeModel(transition) {
    // console.log(transition.targetName);
    await this.session.setup();

    // const controller = this.controllerFor('application');
    // controller.isNavbarShow  = true;
    // this.router.transitionTo('login');
  }
}
