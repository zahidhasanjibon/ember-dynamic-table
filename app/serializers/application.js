import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  primaryKey = '_id';
  payloadTypeFromModelName(modelName) {
    console.log('model', modelName);
    return super.payloadTypeFromModelName(...arguments);
  }
}
