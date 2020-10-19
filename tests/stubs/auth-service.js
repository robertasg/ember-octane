import Service from '@ember/service';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class MockAuthService extends Service {
  @inject router;

  currentUserId = null;

  loginWithUserId(userId) {
    this.currentUserId = userId;
    this.router.transitionTo('teams');
  }

  @action
  logout() {
    this.currentUserId = null;
    this.router.transitionTo('login')
  }
}
