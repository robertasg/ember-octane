import Service from '@ember/service';
import { inject } from '@ember/service';

import { action } from '@ember/object';

const AUTH_KEY = 'shlack-userid';

export default class AuthService extends Service {
  @inject router;
  @inject cookies;

  get currentUserId() {
    return this.cookies.read(AUTH_KEY);
  }

  loginWithUserId(userId) {
    this.cookies.write(AUTH_KEY, userId);
    this.router.transitionTo('/teams');
  }

  @action
  logout() {
    this.cookies.write(AUTH_KEY, null);
    this.router.transitionTo('/login');
  }
}