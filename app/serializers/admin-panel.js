import RESTSerializer from '@ember-data/serializer/rest';
// import { camelize } from '@ember/string';

export default class AdminPanelSerializer extends RESTSerializer {
  //   payloadTypeFromModelName(modelName) {
  //     console.log('model', modelName);
  //     // return 'data';
  //     return super.payloadTypeFromModelName('data');
  //   }

  // normalizeResponse()
  // payloadKeyFromModelName(data) {
  //   console.log('data', data);
  //   return super.payloadKeyFromModelName(...arguments);
  // }

  // modelNameFromPayloadKey(model) {
  //   console.log(model);
  //   return super.modelNameFromPayloadKey('adminPanel');
  //   // return super.modelNameFromPayloadKey('data');
  // }
  //   payloadKeyFromModelName(modelName) {
  //     // if (modelName === 'user') {
  //     //   return 'data';
  //     // } else {
  //     //   return this._super(...arguments);
  //     // }

  //     console.log('key', modelName);
  //     return super.payloadKeyFromModelName(...arguments);
  //   }
  // call when receive data from server
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { [primaryModelClass.modelName]: payload.data };
    payload[primaryModelClass.modelName].id = 1;
    console.log('payload', payload);
    // payload[]

    // return super.normalizeResponse(...arguments);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
  // call when send data to server
  // serialize(snapshot, options) {
  //   console.log('snap', snapshot);
  // }

  //   keyForAttribute(attr) {
  //     console.log('attr', attr);
  //     return underscore(attr);
  //   }

  //   modelNameFromPayloadKey(key) {
  //     console.log('key', key);
  //     return 'datum';
  //     return super.modelNameFromPayloadKey('data');
  //     // return 'data';return this._
  //     // return super.modelNameFromPayloadKey('data');
  //   }
}
