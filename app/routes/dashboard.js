import { set } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import jwtParser from '../utils/jwtparser';
export default class DashboardRoute extends Route {
  @service session;
  @service store;
  @service router;

  // beforeModel(transition) {
  //   // let obj = new customAuth();
  //   // let data = {
  //   //   access_token: this.session.data.authenticated.access_token,
  //   //   refresh_token: this.session.data.authenticated.refresh_token,
  //   // };

  //   //  obj.restore(data);
  //   // console.log(aa);

  //   // if (this.session.isAuthenticated) {
  //   //   this.router.transitionTo('dashboard');
  //   // }
  //   console.log(this.session.isAuthenticated);
  //   // this.session.requireAuthentication(transition, 'login');
  //   if (!this.session.isAuthenticated) {
  //     // eslint-disable-next-line ember/no-controller-access-in-routes
  //     const controller = this.controllerFor('login');
  //     controller.prevTrans = transition;
  //     this.router.transitionTo('login');
  //   }
  //   return new Promise((resolve) => {
  //     // let obj = new customAuth();
  //     const data = {
  //       access_token: this.session.data.authenticated.access_token,
  //       refresh_token: this.session.data.authenticated.refresh_token,
  //     };
  //     // console.log(this.session);

  //     // obj.restore(data).then(() => {
  //     //   resolve();
  //     //   console.log('in');
  //     // });

  //     const refresh_token = this.session.data?.authenticated?.refresh_token;
  //     const access_token = this.session.data?.authenticated?.access_token;

  //     fetch('http://localhost:5000/api/check/token', {
  //       headers: {
  //         authorization: `Bearer ${access_token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((d) => {
  //         if (d.success) {
  //           console.log('accesstokenvalid', d);

  //           resolve(data);
  //           // this.router.transition('dashboard');
  //         } else {
  //           console.log('fetch new access token');
  //           fetch('http://localhost:5000/api/token/new', {
  //             headers: {
  //               authorization: `Bearer ${refresh_token}`,
  //             },
  //           })
  //             .then((res) => res.json())
  //             .then((d) => {
  //               console.log('refreshtokengenerate', d);
  //               if (d.success) {
  //                 const newData = {
  //                   refresh_token: d.refresh_token,
  //                   access_token: d.access_token,
  //                 };

  //                 resolve(newData);
  //                 // this.router.transition('dashboard');
  //               } else {
  //                 console.log('refresh token invalid');
  //                 // this.session.requireAuthentication(transition, 'login');
  //                 this.session.invalidate();
  //                 // this.router.transitionTo('login');
  //               }
  //             });
  //         }
  //       });
  //   });
  // }
  // beforeModel(transition) {
  //   if (!this.session.isAuthenticated) {
  //     // eslint-disable-next-line ember/no-controller-access-in-routes
  //     const controller = this.controllerFor('login');
  //     controller.prevTrans = transition;
  //     this.router.transitionTo('login');
  //   }
  //   return new Promise((resolve) => {
  //     const refresh_token = this.session.data?.authenticated?.refresh_token;
  //     const access_token = this.session.data?.authenticated?.access_token;
  //     const accessTokenResponse = jwtParser(access_token);

  //     if (accessTokenResponse) {
  //       const currentTime = Date.now() / 1000;
  //       if (accessTokenResponse?.exp > currentTime) {
  //         console.log('access token valid');
  //         resolve();
  //       } else {
  //         console.log('access token invalid');
  //         const refreshTokenResponse = jwtParser(refresh_token);
  //         if (refreshTokenResponse) {
  //           const currentTime = Date.now() / 1000;
  //           if (refreshTokenResponse?.exp < currentTime) {
  //             console.log('refresh token invalid');
  //             this.session.invalidate();
  //           } else {
  //             console.log('refresh token valid');
  //             fetch('http://localhost:5000/api/token/new', {
  //               headers: {
  //                 authorization: `Bearer ${refresh_token}`,
  //               },
  //             })
  //               .then((res) => res.json())
  //               .then((d) => {
  //                 const sessionData = this.session?.data?.authenticated;
  //                 console.log(sessionData);
  //                 set(
  //                   this,
  //                   'session.data.authenticated.access_token',
  //                   d.access_token
  //                 );
  //                 set(
  //                   this,
  //                   'session.data.authenticated.refresh_token',
  //                   d.refresh_token
  //                 );
  //                 // sessionData.access_token = d.access_token;
  //                 // sessionData.refresh_token = d.refresh_token;
  //                 console.log(sessionData);
  //                 resolve();
  //                 // sessionData?.access_token = d.access_token
  //                 // sessionData?.refresh_token = d.refresh_token
  //                 // this.session?.data?.authenticated?.access_token = d.access_token
  //                 // this.session?.data?.authenticated?.refresh_token = d.refresh_token
  //                 // this.session?.data?.authenticated?.access_token = d.access_token
  //               });
  //             // console.log(this.session?.data?.authenticated?.refresh_);
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');

    const refresh_token = this.session.data?.authenticated?.refresh_token;
    const access_token = this.session.data?.authenticated?.access_token;

    const accessTokenResponse = jwtParser(access_token);

    if (accessTokenResponse) {
      const currentTime = Date.now() / 1000;
      if (accessTokenResponse?.exp > currentTime) {
        console.log('access token valid');
        return;
      } else {
        console.log('access token invalid');
        const refreshTokenResponse = jwtParser(refresh_token);
        if (refreshTokenResponse) {
          const currentTime = Date.now() / 1000;
          if (refreshTokenResponse?.exp < currentTime) {
            console.log('refresh token invalid');
            this.session.invalidate();
          } else {
            console.log('refresh token valid');

            set(this, 'session.data.authenticated.access_token', '');
            set(this, 'session.data.authenticated.refresh_token', '');

            // console.log(this.session);

            // fetch('http://localhost:5000/api/token/new', {
            //   headers: {
            //     authorization: `Bearer ${refresh_token}`,
            //   },
            // })
            //   .then((res) => res.json())
            //   .then((d) => {
            //     const sessionData = this.session?.data?.authenticated;
            //     console.log(sessionData);
            //     set(
            //       this,
            //       'session.data.authenticated.access_token',
            //       d.access_token
            //     );
            //     set(
            //       this,
            //       'session.data.authenticated.refresh_token',
            //       d.refresh_token
            //     );
            //     // sessionData.access_token = d.access_token;
            //     // sessionData.refresh_token = d.refresh_token;
            //     console.log(sessionData);
            //   });
            // console.log(this.session?.data?.authenticated?.refresh_);
          }
        }
      }
    }
  }
}
