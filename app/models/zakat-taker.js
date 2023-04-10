import Model, { attr } from '@ember-data/model';

export default class ZakatTakerModel extends Model {
  @attr name;
  @attr address;
  @attr phone;
  @attr country;
}
