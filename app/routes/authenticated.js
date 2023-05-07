import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends Route {
  @service session;
  @service router;

  beforeModel(transition) {
    if (!this.session.isAuthenticated) {
      // eslint-disable-next-line ember/no-controller-access-in-routes
      const controller = this.controllerFor('login');
      controller.prevTrans = transition;
      this.router.transitionTo('login');
    }
    return new Promise((resolve) => {
      const data = {
        access_token: this.session.data.authenticated.access_token,
        refresh_token: this.session.data.authenticated.refresh_token,
      };

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
                } else {
                  console.log('refresh token invalid');
                  this.session.invalidate();
                }
              });
          }
        });
    });
  }
}
