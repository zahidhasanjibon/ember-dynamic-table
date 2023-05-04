import Model, { attr } from '@ember-data/model';
import { buildValidations, validator } from 'ember-cp-validations';

const Validations = buildValidations(
  {
    // firstName: {
    //   description: 'firstName',
    //   validators: [
    //     validator('presence', true),
    //     validator('length', {
    //       // isWarning: true,
    //       min: 5,
    //       max: 15,
    //     }),
    //     // validator('exclusion', {
    //     //   in: ['Admin', 'Super Admin'],
    //     //   message: 'this name is reserved',
    //     // }),
    //     // validator('inclusion', {
    //     //   in: ['zahid', 'hasan'],
    //     //   message: 'first name must be zahid or hasan',
    //     // }),
    //   ],
    // },
    firstName: {
      description: 'firstName',
      validators: [
        validator('unique-username', {
          dependentKeys: ['lastName'],
        }),
        // validator('length', {
        //   // isWarning: true,
        //   min: 5,
        //   max: 15,
        // }),
        // validator('presence', true),
        // validator('presence', {
        //   presence: true,
        //   dependentKeys: ['lastName'],
        //   message: 'Please enter your first or last name',
        // }),
      ],
    },
    lastName: {
      description: 'lastName',
      validators: [
        validator('unique-username', {
          dependentKeys: ['firstName'],
        }),
        // validator('length', {
        //   // isWarning: true,
        //   min: 5,
        //   max: 15,
        // }),
        // validator('presence', true),
        // validator('presence', {
        //   presence: true,
        //   dependentKeys: ['firstName'],
        //   message: 'Please enter your first or last name',
        // }),
        // validator('length', {
        //   min: 5,
        //   max: 15,
        // }),
      ],
    },

    email: {
      description: 'email',
      validators: [
        validator('presence', true),
        validator('format', {
          type: 'email',
        }),
      ],
    },
    phone: {
      description: 'phone',
      validators: [validator('presence', true)],
    },
    comment: {
      description: 'comment',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 5,
          max: 15,
        }),
      ],
    },
    designation: {
      description: 'designation',
      validators: [
        validator('presence', true),
        validator('length', {
          min: 5,
          max: 15,
        }),
        // validator('confirmation', {
        //   on: 'email',
        //   message: '{description} do not match',
        //   description: 'email address',
        // }),
      ],
    },
  },
  {
    debounce: 500,
  }
);

// eslint-disable-next-line ember/no-classic-classes
export default Model.extend(Validations, {
  firstName: attr('string'),
  lastName: attr('string'),
  phone: attr('string'),
  email: attr('string'),
  comment: attr('string'),
  designation: attr('string'),
});
