import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import fetch from 'fetch';

export default class TeamsRoute extends Route {
  @inject auth;

  async beforeModel(transition) {
    await super.beforeModel(transition);

    if (!this.auth.currentUserId) {
      this.transitionTo('login');
    }
  }

  async model() {
    const response = await fetch('/api/teams');
    return response.json();
  }
}
