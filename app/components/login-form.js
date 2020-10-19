import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class LoginFormComponent extends Component {
  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  loginAsUserWithId(value) {
    console.log('Login as UserId: ', value);
  }

  @action
  onLoginFormSubmit(evt) {
    const { target } = evt;
    const val = target.querySelector('select').value;
    evt.preventDefault();

    this.loginAsUserWithId(val);
  }

  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }
}
