// import Model, { attr } from '@ember-data/model';
// import { buildValidations, validator } from 'ember-cp-validations';

// const Validations = buildValidations(
//   {
//     firstName: {
//       description: 'firstName',
//       validators: [
//         validator('presence', true),
//         validator('length', {
//           min: 5,
//           max: 15,
//         }),
//       ],
//     },
//     lastName: {
//       description: 'lastName',
//       validators: [
//         validator('presence', true),
//         validator('length', {
//           min: 5,
//           max: 15,
//         }),
//       ],
//     },

//     email: {
//       validators: [
//         validator('presence', true),
//         validator('format', {
//           type: 'email',
//         }),
//       ],
//     },
//     phone: {
//       description: 'phone',
//       validators: [
//         validator('presence', true),
//         validator('number'),
//         validator('number', {
//           allowString: true,
//           integer: true,
//           gt: 5,
//           lte: 100,
//         }),
//       ],
//     },
//     comment: {
//       description: 'comment',
//       validators: [
//         validator('presence', true),
//         validator('length', {
//           min: 5,
//           max: 15,
//         }),
//       ],
//     },
//     designation: {
//       description: 'designation',
//       validators: [
//         validator('presence', true),
//         validator('length', {
//           min: 5,
//           max: 15,
//         }),
//       ],
//     },
//   },
//   {
//     debounce: 500,
//   }
// );

// export default Model.extend(Validations, {
//   name: attr('string'),
//   email: attr('string'),
//   mobileNumber: attr('string'),
// });

import Model, { attr } from '@ember-data/model';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations({
  name: validator('presence', true),
  email: [validator('presence', true), validator('format', { type: 'email' })],
});

export default class UserModel extends Model.extend(Validations) {
  @attr('string') name;
  @attr('string') email;
}
