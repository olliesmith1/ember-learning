import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsEditController extends Controller {
  @action
  editCar(id) {
    var make = this.model.make;
    var model = this.model.model;
    var year = this.model.year;

    this.store.findRecord('car', id).then(function(car){
      car.set('make', make);
      car.set('model', model);
      car.set('year', year);
      car.save();
    });

    this.transitionToRoute('cars');
  }
}
