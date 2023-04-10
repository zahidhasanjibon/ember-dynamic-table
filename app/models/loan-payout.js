import Model, { attr } from '@ember-data/model';

export default class LoanPayoutModel extends Model {
  @attr amount;
  @attr due;
  @attr debit;
  @attr credit;
}
