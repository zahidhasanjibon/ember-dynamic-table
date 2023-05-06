import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfileRoute extends Route {
  @service store;
  @service session;
  @service router;
  beforeModel(transition) {
    console.log(this.session.isAuthenticated);
    // this.session.requireAuthentication(transition, 'login');
    if (!this.session.isAuthenticated) {
      // eslint-disable-next-line ember/no-controller-access-in-routes
      const controller = this.controllerFor('login');
      controller.prevTrans = transition;
      this.router.transitionTo('login');
    }
    return new Promise((resolve) => {
      // let obj = new customAuth();
      const data = {
        access_token: this.session.data.authenticated.access_token,
        refresh_token: this.session.data.authenticated.refresh_token,
      };
      // console.log(this.session);

      // obj.restore(data).then(() => {
      //   resolve();
      //   console.log('in');
      // });

      const refresh_token = this.session.data?.authenticated?.refresh_token;
      const access_token = this.session.data?.authenticated?.access_token;

      fetch('http://localhost:5000/api/check/token', {
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          if (d.success) {
            console.log('accesstokenvalid', d);

            resolve(data);
            // this.router.transition('dashboard');
          } else {
            console.log('fetch new access token');
            fetch('http://localhost:5000/api/token/new', {
              headers: {
                authorization: `Bearer ${refresh_token}`,
              },
            })
              .then((res) => res.json())
              .then((d) => {
                console.log('refreshtokengenerate', d);
                if (d.success) {
                  const newData = {
                    refresh_token: d.refresh_token,
                    access_token: d.access_token,
                  };

                  resolve(newData);
                  // this.router.transition('dashboard');
                } else {
                  console.log('refresh token invalid');
                  // this.session.requireAuthentication(transition, 'login');
                  this.session.invalidate();
                  // this.router.transitionTo('login');
                }
              });
          }
        });
    });
  }

  model() {
    return this.store.createRecord('profile');
  }
}
