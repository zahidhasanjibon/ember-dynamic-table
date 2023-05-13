import Model, { attr } from '@ember-data/model';

export default class AdminPanelModel extends Model {
  @attr accountProfilePic;
  @attr adminPanelBackground;
  @attr navbarTextColor;
  @attr navbarLogo;
  @attr navbarColor;
  @attr searchIcon;
  @attr searchColor;
  @attr profilePicShape;
  @attr sideNavbarColor;
  @attr userTableColor;
  @attr archiveUserTableColor;
  @attr sideNavbarBtns;
  @attr footerColor;
  @attr adminPanelBackground;
  @attr userTableTextColor;
  @attr archiveTableTextColor;
}
