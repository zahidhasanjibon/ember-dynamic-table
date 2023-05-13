import RESTAdapter from '@ember-data/adapter/rest';
import { set } from '@ember/object';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import parseJwt from '../utils/jwtparser';

export default class ApplicationAdapter extends RESTAdapter {
  @service session;
  @service store;
  host = 'http://localhost:5000';
  // refresh_token = this.session.data?.authenticated?.refresh_token;
  pathForType(type) {
    console.log('type', type);
    return 'data';
  }

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
      console.log('in');
      const refresh_token = this.session?.data?.authenticated.refresh_token;

      const refreshTokenResponse = parseJwt(refresh_token);
      if (refreshTokenResponse) {
        const currentTime = Date.now() / 1000;
        if (refreshTokenResponse?.exp < currentTime) {
          console.log('refresh token invalid');
          this.session.invalidate();
        } else {
          console.log('refresh token valid');
          set(this, 'session.data.authenticated.access_token', '');
          set(this, 'session.data.authenticated.refresh_token', '');
        }
      }
    } else {
      return super.handleResponse(...arguments);
    }
  }
}
