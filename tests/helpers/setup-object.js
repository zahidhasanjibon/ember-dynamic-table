/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
export default function (context, obj, options = {}) {
  // eslint-disable-next-line prettier/prettier
  return obj.create(context.owner.ownerInjection(), options);
}
