import RESTAdapter from '@ember-data/adapter/rest';
import { set } from '@ember/object';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  host = 'http://localhost:5000';
  refresh_token = this.session.data?.authenticated?.refresh_token;

  @computed('session.{data.authenticated.access_token,isAuthenticated}')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers[
        'Authorization'
      ] = `Bearer ${this.session.data.authenticated.access_token}`;
    }
    return headers;
  }

  handleResponse(status, headers, payload) {
    // for checking access token if invalid check refresh token if invalid then logout
    console.log(payload);
    if (payload?.success === false) {
      fetch('http://localhost:5000/api/token/new', {
        headers: {
          authorization: `Bearer ${this.refresh_token}`,
        },
      })
        .then((res) => res.json())
        .then((d) => {
          if (!d.success) {
            // logout the user
            this.session.invalidate();
          } else {
            console.log('access token expire');

            set(
              this,
              'session.data.authenticated.access_token',
              d.access_token
            );
            console.log(this.session.data.authenticated.access_token);
            return super.handleResponse(...arguments);
          }
        });
    } else {
      return super.handleResponse(...arguments);
    }
  }
}
