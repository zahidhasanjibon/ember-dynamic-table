import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminPanelRoute extends Route {
  @service store;
  model() {
    return hash({
      userTableData: this.store.findAll('admin-panel'),
      addUserModel: this.store.createRecord('profile'),
    });
  }
}
