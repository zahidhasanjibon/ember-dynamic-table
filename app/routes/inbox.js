import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class InboxRoute extends Route {
  @service session;
  @service store;
  @service router;
  beforeModel(transition) {
    // this.session.setup();
    // console.log(transition.targetName);
    // if (!this.session.isAuthenticated) {
    //   // this.session.requireAuthentication(transition, 'login');
    //   // this.router.transitionTo('login');
    //   // eslint-disable-next-line ember/no-controller-access-in-routes
    //   // const loginController = this.controllerFor('login');
    //   // loginController.previousTrans = transition;
    //   // // eslint-disable-next-line ember/no-controller-access-in-routes
    //   // console.log(this.controllerFor('login'));
    //   // this.router.transitionTo('login');

    // }

    // if (this.session.isAuthenticated) {
    //   console.log(this.session);
    //   // let data = {
    //   //   access_token: this.session.data.authenticated.access_token,
    //   //   refresh_token: this.session.data.authenticated.refresh_token,
    //   // };
    //   // this.session.restore(data);
    // }
    // let obj = new customAuth();
    // let data = {
    //   access_token: this.session.data.authenticated.access_token,
    //   refresh_token: this.session.data.authenticated.refresh_token,
    // };

    // obj.restore(data);
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

  // afterModel(model) {
  //   console.log('model', model.length);
  //   // return this.store.findAll('message');
  //   if (!this.session.isAuthenticated) {
  //     if (model.length === 0) {
  //       return this.store.findAll('message');
  //     }
  //   }
  // }

  @action
  error(error, transition) {
    console.log('error', error);
    console.log('transition', transition);
    // if (error.status === '403') {
    //   this.router.replaceWith('login');
    // } else {
    //   // Let the route above this handle the error.
    //   return true;
    // }
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
