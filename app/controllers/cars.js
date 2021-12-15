import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsController extends Controller {
  @action
  deleteCar(id) {
    this.store.findRecord('car', id).then(function(car){
      car.deleteRecord();
      car.save();
    });
  }
}
