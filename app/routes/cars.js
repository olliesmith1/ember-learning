import Route from '@ember/routing/route';

export default class CarsRoute extends Route {
  model() {
    return this.store.findAll('car');
  }
}
