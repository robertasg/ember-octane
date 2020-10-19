import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';

export default class LoginFormComponent extends Component {
  @inject auth;

  @tracked
  userId = null;

  get isDisabled() {
    return !this.userId;
  }

  @action
  onLoginFormSubmit(evt) {
    const { target } = evt;
    const val = target.querySelector('select').value;
    evt.preventDefault();

    this.auth.loginWithUserId(val);
  }

  @action
  onSelectChanged(evt) {
    this.userId = evt.target.value;
  }
}
