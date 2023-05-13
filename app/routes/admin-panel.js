import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class AdminPanelRoute extends Route {
  @service store;
  model() {
    // let data = null;

    // fetch(){
    //    fetch('/api/adminPanels.json')
    // }

    // .then((res) => res.json())
    // .then((d) => {
    return hash({
      // adminPanelData: fetch('/api/adminPanels.json').then((res) => res.json()),
      adminPanelData: this.store.queryRecord('admin-panel', {}),
      addUserModel: this.store.createRecord('profile'),
    });
    // });
  }
}
