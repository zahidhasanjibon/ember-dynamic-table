import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminPanelRoute extends Route {
  @service store;
  model() {
    this.store.findAll('admin-panel');
  }
}
