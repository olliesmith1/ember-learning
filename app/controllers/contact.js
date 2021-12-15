import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ContactController extends Controller {
  title = 'Contact Us';
  body = 'This is the body';
  authors = ['William', 'Maggie', 'Rochelle'];
  created = new Date();
  comments = [
    {
      name: 'Mike Smith',
      note: 'Thanks for watching!',
    },
    {
      name: 'Joe Doe',
      note: 'Great job Jokers',
    },
  ];

  @action
  sayHello() {
    alert('Hello');
  }

  @action
  toggleBody() {
    // eslint-disable-next-line ember/classic-decorator-no-classic-methods
    this.toggleProperty('isShowingBody');
  }

  @action
  submitAction() {
    alert(`Thanks ${this.name} for submitting the comment ${this.note}`);
  }
}
