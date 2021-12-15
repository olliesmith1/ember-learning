import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class CarsNewController extends Controller {
  @action
  addCar() {
    var rand = Math.floor(Math.random() * 10000 + 1);
    var newCar = this.store.createRecord('car', {
      id: rand,
      make: this.carMake,
      model: this.carModel,
      year: this.carYear,
    });

    newCar.save();
    this.transitionToRoute('cars');
  }
}
