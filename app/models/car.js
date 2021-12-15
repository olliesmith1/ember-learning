import Model, { attr } from '@ember-data/model';

export default class CarModel extends Model {
  @attr('string') make;
  @attr('string') model;
  @attr('string') year;
}
