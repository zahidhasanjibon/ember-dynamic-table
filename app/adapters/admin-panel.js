import RESTAdapter from '@ember-data/adapter/rest';

export default class AdminPanelAdapter extends RESTAdapter {
  // namespace = 'api';
  // buildURL(...args) {
  //   return `${super.buildURL(...args)}.json`;
  // }
  host = 'http://localhost:5000';

  // pathForType(type) {
  //   console.log('type', type);
  //   return 'data';
  // }
}
