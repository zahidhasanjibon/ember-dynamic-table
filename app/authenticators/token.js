/* eslint-disable prettier/prettier */
/* eslint-disable ember/new-module-imports */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { inject as service } from '@ember/service';
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default class CustomAuthenticator extends Base {
  @service session;

   restore(data) {
    const { access_token, refresh_token } = data;
    console.log('data', data);

    if (access_token) {
      return new Ember.RSVP.Promise((resolve, reject) => {
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
                      refresh_token:d.refresh_token,
                      access_token: d.access_token,
                    };
                    resolve(newData);
                  } else {
                    console.log('refresh token invalid');
                    reject();
                    // this.invalidate()
                  }
                });
            }
          });
      });
    } else {
      throw 'no valid token data';
    }
    //  fetch('http://localhost:5000/api/check/token',{
    //   headers:{
    //     authorization:`Bearer ${access_token}`
    //   }
    // })
    // .then((res) => res.json())
    // .then(d => {
    //   console.log(d);
    //     if(d.success){
    //       return data
    //     } else {
    //         throw 'invalid token'
    //     }
    // })

    // return new Promise((resolve, reject) => {
    //    const {access_token} = data
    //   if (access_token) {
    //     console.log(access_token);
    //     resolve(data);
    //   } else {
    //     reject();
    //   }
    // });

    // const {access_token,refresh_token} = data
    // const mainTokenData={access_token,refresh_token}
    // console.log(data);
    // fetch('http://localhost:5000/api/check/token',{
    //   headers:{
    //     authorization:`Bearer ${access_token}`
    //   }
    // })
    // .then((res) => res.json())
    // .then((tokenData) => {
    //   console.log('data',tokenData);
    //   if(!tokenData.success){
    //     fetch('http://localhost:5000/api/token/new',{
    //       headers:{
    //         authorization:`Bearer ${refresh_token}`
    //       }
    //     })
    //     .then(res => res.json())
    //     .then(tokenData => {
    //         if(!tokenData.success){
    //           this.session.invalidate()
    //         } else {

    //           return new Ember.RSVP.Promise( (resolve, reject) => {
    //             // const {access_token} = data
    //             //   fetch('http://localhost:5000/api/check/token',{
    //             //     headers:{
    //             //       authorization:`Bearer ${access_token}`
    //             //     }
    //             //   })
    //             //   .then((data) =>console.log(data))
    //             console.log('data2',data);
    //             // console.log('re',refresh_token);
    //                 data.refresh_token = refresh_token
    //               resolve(data);
    //           });
    //         }

    //     })
    //   } else {
    //     console.log(data);
    //     // eslint-disable-next-line ember/new-module-imports
    //     return new Ember.RSVP.Promise( (resolve, reject) => {

    //       // const {access_token} = data
    //       //   fetch('http://localhost:5000/api/check/token',{
    //       //     headers:{
    //       //       authorization:`Bearer ${access_token}`
    //       //     }
    //       //   })
    //       //   .then((data) =>console.log(data))
    //         resolve(data);
    //     });
    //   }

    // })
    // eslint-disable-next-line ember/new-module-imports
    // return new Ember.RSVP.Promise( (resolve, reject) => {

    //   // const {access_token} = data
    //   //   fetch('http://localhost:5000/api/check/token',{
    //   //     headers:{
    //   //       authorization:`Bearer ${access_token}`
    //   //     }
    //   //   })
    //   //   .then((data) =>console.log(data))

    //   if (access_token) {
    //     resolve(data);
    //   } else {
    //     console.log("Old logging system detected. Logging out.");
    //     reject();
    //   }
    // });
  }

  async authenticate(userName, password) {
    const response = await fetch('http://localhost:5000/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  }

  async invalidate(data) {
    // eslint-disable-next-line ember/new-module-imports
    // return new Ember.RSVP.Promise((resolve) => {
    //   this.session.invalidate().finally(() => {
    //     resolve();
    //   });
    // });
  }
}
