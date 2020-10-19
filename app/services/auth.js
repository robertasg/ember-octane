import Service from '@ember/service';
import { inject } from '@ember/service';

const AUTH_KEY = 'shlack-userid';

export default class AuthService extends Service {
  @inject router;

  get getCurrentUserId() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  loginWithUserId(userId) {
    window.localStorage.setItem(AUTH_KEY, userId);
    this.router.transitionTo('/teams');
  }

  logout() {
    this.loginWithUserId(null);
    this.router.transitionTo('/login');
  }
}