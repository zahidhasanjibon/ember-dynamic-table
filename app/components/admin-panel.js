import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AdminPanelComponent extends Component {
  @tracked isAddUserModalShow = false;
  @action showAddUserModal() {
    this.isAddUserModalShow = true;
  }
}
