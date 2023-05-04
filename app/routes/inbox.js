import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class InboxRoute extends Route {
  @service session;
  @service store;
  @service router;
  beforeModel(transition) {
    // this.session.setup();
    console.log(transition);
    // console.log(transition.targetName);
    // if (!this.session.isAuthenticated) {
    //   // this.session.requireAuthentication(transition, 'login');
    //   // this.router.transitionTo('login');
    //   // eslint-disable-next-line ember/no-controller-access-in-routes
    //   const loginController = this.controllerFor('login');
    //   loginController.previousTrans = transition;
    //   // eslint-disable-next-line ember/no-controller-access-in-routes
    //   console.log(this.controllerFor('login'));
    //   this.router.transitionTo('login');
    // }

    this.session.requireAuthentication(transition, 'login');

    // console.log(this.session.isAuthenticated);
    // if (!this.session.isAuthenticated) {
    //   // this.router.transitionTo('login');
    //   // eslint-disable-next-line ember/no-controller-access-in-routes
    //   const loginController = this.controllerFor('login');
    //   loginController.previousTrans = transition;
    //   // eslint-disable-next-line ember/no-controller-access-in-routes
    //   console.log(this.controllerFor('login'));
    //   this.router.transitionTo('login');
    // }
  }

  model() {
    return this.store.findAll('message');
  }

  // afterModel() {
  //   console.log('session', this.session);
  //   if (this.session.isAuthenticated) {
  //     this.router.transitionTo('inbox');
  //   }
  // }
  // }
  // @action
  // error(error) {
  //   // this.session.invalidate();
  //   console.log('inside error');
  //   // console.log(error.errors[0].detail);
  //   console.log(error);
  //   this.router.replaceWith('error', {
  //     queryParams: { errorMessage: error.errors[0].detail },
  //   });
  // }
}
